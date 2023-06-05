package com.microservice.product;

import com.microservice.product.model.Product;
import com.microservice.product.repository.ProductRepository;

import org.junit.jupiter.api.Test;
import org.assertj.core.api.Assertions;
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

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProductApplicationTests {

	@Autowired
	private WebTestClient webTestClient;

	@Autowired
    ProductRepository productRepository;

	@Test
	public void testCreateProductOne_forValidProductId_createsNewProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "Java Coffee");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 11.99);
        ReflectionTestUtils.setField(product, "productQuantity", 1000);

		webTestClient.post().uri("/products")
            .contentType(MediaType.APPLICATION_JSON)
            .accept(MediaType.APPLICATION_JSON)
            .body(Mono.just(product), Product.class)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id").isNotEmpty()
            .jsonPath("$.productName").isEqualTo("Java Coffee")
            .jsonPath("$.productDescription").isEqualTo("Beverage")
            .jsonPath("$.productPrice").isEqualTo(11.99)
            .jsonPath("$.productQuantity").isEqualTo(1000);
	}

    @Test
	public void testCreateProductTwo_forValidProductId_createsNewProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "Espresso Coffee");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 9.99);
        ReflectionTestUtils.setField(product, "productQuantity", 1000);

		webTestClient.post().uri("/products")
            .contentType(MediaType.APPLICATION_JSON)
            .accept(MediaType.APPLICATION_JSON)
            .body(Mono.just(product), Product.class)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id").isNotEmpty()
            .jsonPath("$.productName").isEqualTo("Espresso Coffee")
            .jsonPath("$.productDescription").isEqualTo("Beverage")
            .jsonPath("$.productPrice").isEqualTo(9.99)
            .jsonPath("$.productQuantity").isEqualTo(1000);
	}

    @Test
	public void testCreateProductThree_forValidProductId_createsNewProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "Lavazza Aroma Coffee");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 16.99);
        ReflectionTestUtils.setField(product, "productQuantity", 1000);

		webTestClient.post().uri("/products")
            .contentType(MediaType.APPLICATION_JSON)
            .accept(MediaType.APPLICATION_JSON)
            .body(Mono.just(product), Product.class)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id").isNotEmpty()
            .jsonPath("$.productName").isEqualTo("Lavazza Aroma Coffee")
            .jsonPath("$.productDescription").isEqualTo("Beverage")
            .jsonPath("$.productPrice").isEqualTo(16.99)
            .jsonPath("$.productQuantity").isEqualTo(1000);
	}

    @Test
	public void testCreateProductFour_forValidProductId_createsNewProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "Americano Coffee");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 12.99);
        ReflectionTestUtils.setField(product, "productQuantity", 1000);

		webTestClient.post().uri("/products")
            .contentType(MediaType.APPLICATION_JSON)
            .accept(MediaType.APPLICATION_JSON)
            .body(Mono.just(product), Product.class)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id").isNotEmpty()
            .jsonPath("$.productName").isEqualTo("Americano Coffee")
            .jsonPath("$.productDescription").isEqualTo("Beverage")
            .jsonPath("$.productPrice").isEqualTo(12.99)
            .jsonPath("$.productQuantity").isEqualTo(1000);
	}

	@Test
    public void testGetAllProducts_forValidProductClass_returnsAllProductsReturnsHttpStatusCodeOk() {
	    webTestClient.get().uri("/products")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBodyList(Product.class);
    }

    @Test
    public void testGetSingleProduct_forValidProductId_returnsSingleProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "A Single Product Test");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 100);
        ReflectionTestUtils.setField(product, "productQuantity", 100);

        Product productTest = productRepository.save(product).block();

        webTestClient.get()
            .uri("/products/{id}", Collections.singletonMap("id", productTest.getId()))
            .exchange()
            .expectStatus().isOk()
            .expectBody()
            .consumeWith(response ->
                    Assertions.assertThat(response.getResponseBody()).isNotNull());
    }

    @Test
    public void testUpdateProduct_forValidProductObject_updatesProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "Initial Product");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 100);
        ReflectionTestUtils.setField(product, "productQuantity", 100);

        Product productTest = productRepository.save(product).block();

        Product productNew = new Product();
        ReflectionTestUtils.setField(productNew, "productName", "Updated Product Test");
        ReflectionTestUtils.setField(productNew, "productDescription", "Beverage");
        ReflectionTestUtils.setField(productNew, "productPrice", 100);
        ReflectionTestUtils.setField(productNew, "productQuantity", 100);

        webTestClient.put()
            .uri("/products/{id}", Collections.singletonMap("id", productTest.getId()))
            .contentType(MediaType.APPLICATION_JSON)
            .accept(MediaType.APPLICATION_JSON)
            .body(Mono.just(productNew), Product.class)
            .exchange()
            .expectStatus().isOk()
            .expectHeader().contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.productName").isEqualTo("Updated Product Test")
            .jsonPath("$.productDescription").isEqualTo("Beverage")
            .jsonPath("$.productPrice").isEqualTo(100)
            .jsonPath("$.productQuantity").isEqualTo(100);
    }

    @Test
    public void testDeleteProduct_forProductIdDeletion_deletesSingleProductReturnsHttpStatusCodeOk() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "To be deleted");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 100);
        ReflectionTestUtils.setField(product, "productQuantity", 100);

	    Product productTest = productRepository.save(product).block();

	    webTestClient.delete()
            .uri("/products/{id}", Collections.singletonMap("id",  productTest.getId()))
            .exchange()
            .expectStatus().isOk();
    }

    //////////////////////////////////////////////////////////////////////////////////////
    // MOCKITO.
    // Spy on Product class.
    @Test
	public void testMockitoMakeProduct_forValidProductObject_CreatesNewProductReturnsCorrectAssertions() {
        Product product = new Product();
        ReflectionTestUtils.setField(product, "productName", "Java Coffee");
        ReflectionTestUtils.setField(product, "productDescription", "Beverage");
        ReflectionTestUtils.setField(product, "productPrice", 11.99);
        ReflectionTestUtils.setField(product, "productQuantity", 1000);

        Product spyOnProduct = spy(product);

        when(spyOnProduct.getProductName()).thenReturn("Java Coffee");
        assertEquals("Java Coffee", spyOnProduct.getProductName());

        when(spyOnProduct.getProductDescription()).thenReturn("Beverage");
        assertEquals("Beverage", spyOnProduct.getProductDescription());

        when(spyOnProduct.getProductPrice()).thenReturn(11.99);
        assertEquals(11.99, spyOnProduct.getProductPrice());

        when(spyOnProduct.getProductQuantity()).thenReturn(1000);
        assertEquals(1000, spyOnProduct.getProductQuantity());
	}

    // Make mock Product class.
    @Test
	public void testMockitoMockProduct_forValidProductObject_CreatesNewProductReturnsCorrectAssertions() {
		Product mockedProduct = mock(Product.class);

        mockedProduct.setProductName("Caramel Coffee");
        mockedProduct.setProductDescription("Hot Beverage");
        mockedProduct.setProductPrice(4.99);
        mockedProduct.setProductQuantity(1);

        when(mockedProduct.getProductName()).thenReturn("Caramel Coffee");
        assertTrue(mockedProduct.getProductName() == "Caramel Coffee");

        when(mockedProduct.getProductDescription()).thenReturn("Hot Beverage");
        assertTrue(mockedProduct.getProductDescription() == "Hot Beverage");

        when(mockedProduct.getProductPrice()).thenReturn(4.99);
        assertTrue(mockedProduct.getProductPrice() == 4.99);

        when(mockedProduct.getProductQuantity()).thenReturn(1);
        assertTrue(mockedProduct.getProductQuantity() == 1);
	}
}