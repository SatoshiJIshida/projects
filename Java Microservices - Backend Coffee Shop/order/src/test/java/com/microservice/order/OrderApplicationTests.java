package com.microservice.order;

import com.microservice.order.model.Order;
import com.microservice.order.repository.OrderRepository;
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

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class OrderApplicationTests {

    private static final String DatabaseName = "basket";
    private static final String CollectionName = "basket";

    @Autowired
    private MongoClient client;

	@Autowired
	private WebTestClient webTestClient;

    @Autowired
    OrderRepository orderRepository;

    public List<String> getBasket() {
        final List<String> list = new ArrayList<>();
        final MongoCollection<Document> data = client.getDatabase(DatabaseName).getCollection(CollectionName);
        data.find().map(Document::toJson).forEach(list::add);
        return list;
    }

    @Test
	public void testAddOrder_forValidOrderId_CreatesNewOrderReturnsHttpStatusCodeOk() throws Exception {
        try {
            List<String> list = new ArrayList<>();
            list = getBasket();
            String basketString = list.toString();

            Order order = new Order();
            ReflectionTestUtils.setField(order, "orderItems", basketString);

            webTestClient.post().uri("/order")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(Mono.just(order), Order.class)
                .exchange()
                .expectStatus().isOk()
                .expectHeader().contentType(MediaType.APPLICATION_JSON)
                .expectBody()
                .jsonPath("$.id").isNotEmpty()
                .jsonPath("$.orderItems").isEqualTo(basketString);
        } catch (Exception e) {
            fail("Exception " + e);
        }
    }

    @Test
    public void testGetOrder_forValidOrderClass_getsOrderReturnsHttpStatusCodeOk() {
	    webTestClient.get().uri("/order")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBodyList(Order.class);
    }

    //////////////////////////////////////////////////////////////////////////////////////
    // MOCKITO.
    // Spy on Order class.
    @Test
	public void testMockitoMakeOrder_forValidOrderId_CreatesNewOrderReturnsCorrectAssertions() {
        Order order = new Order();
        ReflectionTestUtils.setField(order, "orderItems", "The order items in a list as a string");

        Order spyOnOrder = spy(order);

        when(spyOnOrder.getOrderItems()).thenReturn("The order items in a list as a string");
        assertEquals("The order items in a list as a string", spyOnOrder.getOrderItems());
	}

    // Make mock Order class.
    @Test
	public void testMockitoMockOrder_forValidOrderId_CreatesNewOrderReturnsCorrectAssertions() {
		Order mockedOrder = mock(Order.class);

        mockedOrder.setOrderItems("List of items as string");

        when(mockedOrder.getOrderItems()).thenReturn("List of items as string");
        assertTrue(mockedOrder.getOrderItems() == "List of items as string");
	}
}