package com.microservice.basket;

import com.microservice.basket.model.Basket;
import com.microservice.basket.repository.BasketRepository;

import org.junit.jupiter.api.Test;
import org.assertj.core.api.Assertions;
import static org.junit.jupiter.api.Assertions.fail;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.when;

import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;
import reactor.core.publisher.Mono;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import org.json.JSONObject;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BasketApplicationTests {

    private static final String DatabaseName = "product";
    private static final String CollectionName = "products";

    @Autowired
    private MongoClient client;

	@Autowired
	private WebTestClient webTestClient;

    @Autowired
    BasketRepository basketRepository;

    public List<String> getProducts() {
        final List<String> list = new ArrayList<>();
        final MongoCollection<Document> data = client.getDatabase(DatabaseName).getCollection(CollectionName);
        data.find().map(Document::toJson).forEach(list::add);
        return list;
    }

    @Test
	public void testAddToBasket_forValidBasketId_createsNewBasketReturnsHttpStatusCodeOk() throws Exception {
        try {
            List<String> list = new ArrayList<>();
            list = getProducts();
            String stringOfProducts = list.toString();

            Basket basket = new Basket();
            ReflectionTestUtils.setField(basket, "products", stringOfProducts);

            webTestClient.post().uri("/basket")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(Mono.just(basket), Basket.class)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody()
                .jsonPath("$.id").isNotEmpty()
                .jsonPath("$.products").isEqualTo(stringOfProducts);
        } catch (Exception e) {
            fail("Exception " + e);
        }
    }

    @Test
    public void testGetBasketProducts_forValidBasketClass_getsAllBasketItemsReturnsHttpStatusCodeOk() {
	    webTestClient.get().uri("/basket")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBodyList(Basket.class);
    }

    @Test
    public void testUpdateBasket_forValidBasketId_updatesBasketItemReturnsHttpStatusCodeOk() throws Exception {
        try {
            Basket basket = new Basket();
            ReflectionTestUtils.setField(basket, "products", "Initial basket");

            Basket basketProduct = basketRepository.save(basket).block();

            Basket newBasketProduct = new Basket();
            ReflectionTestUtils.setField(newBasketProduct, "products", "Update Basket Test");

            webTestClient.put()
                .uri("/basket/{id}", Collections.singletonMap("id", basketProduct.getId()))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(Mono.just(newBasketProduct), Basket.class)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody()
                .jsonPath("$.id").isNotEmpty()
                .jsonPath("$.products").isEqualTo("Update Basket Test");
        } catch (Exception e) {
            fail("Exception " + e);
        }
    }

    @Test 
    public void testDeleteBasketProduct_forValidBasketIdDeletion_deletesABasketItemReturnsHttpStatusCodeOk() {
        Basket basket = new Basket();
        ReflectionTestUtils.setField(basket, "products", "A Basket");

        Basket basketProduct = basketRepository.save(basket).block();

	    webTestClient.delete()
            .uri("/basket/{id}", Collections.singletonMap("id",  basketProduct.getId()))
            .exchange()
            .expectStatus().isOk();
    }

    //////////////////////////////////////////////////////////////////////////////////////
    // MOCKITO.
    // Spy on Basket class.
    @Test
	public void testMockitoMakeBasketProduct_forValidBasketId_createsNewBasketReturnsCorrectAssertions() {
        Basket basket = new Basket();
        ReflectionTestUtils.setField(basket, "products", "Java Coffee");

        Basket spyOnProduct = spy(basket);

        when(spyOnProduct.getProducts()).thenReturn("Java Coffee");
        assertEquals("Java Coffee", spyOnProduct.getProducts());
	}

    // Make mock Basket class.
    @Test
	public void testMockitoMockBasketProduct_forValidBasketId_createsNewBasketReturnsCorrectAssertions() {
		Basket mockedBasketProduct = mock(Basket.class);

        mockedBasketProduct.setProducts("Vanilla Coffee");

        when(mockedBasketProduct.getProducts()).thenReturn("Vanilla Coffee");
        assertTrue(mockedBasketProduct.getProducts() == "Vanilla Coffee");
	}
}