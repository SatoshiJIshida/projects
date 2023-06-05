package com.microservice.product.controller;

import com.microservice.product.model.Product;
import com.microservice.product.repository.ProductRepository;
import com.microservice.product.exception.NotFoundException;
import com.microservice.product.payload.response.ErrorResponse;
import org.springframework.beans.factory.annotation.Autowired; // automatic dependency injection
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux; // N values.
import reactor.core.publisher.Mono; // 0 or 1 value.
import javax.validation.Valid;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public Flux<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public Mono<Product> createProducts(@Valid @RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/products/{id}")
    public Mono<ResponseEntity<Product>> getProductById(@PathVariable(value = "id") String productId) {
        return productRepository.findById(productId)
                .map(savedProduct -> ResponseEntity.ok(savedProduct))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PutMapping("/products/{id}")
    public Mono<ResponseEntity<Product>> updateProduct(@PathVariable(value = "id") String productId,
                                                   @Valid @RequestBody Product product) {
        return productRepository.findById(productId)
                .flatMap(existingProduct -> {
                    existingProduct.setProductName(product.getProductName());
                    return productRepository.save(existingProduct);
                })
                .map(updateProduct -> new ResponseEntity<>(updateProduct, HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/products/{id}")
    public Mono<ResponseEntity<Void>> deleteProduct(@PathVariable(value = "id") String productId) {

        return productRepository.findById(productId)
                .flatMap(existingProduct ->
                        productRepository.delete(existingProduct)
                            .then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
                )
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Products sent to the client as server sent events.
    @GetMapping(value = "/stream/products", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Product> streamAllProducts() {
        return productRepository.findAll();
    }


    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity handleDuplicateKeyException(DuplicateKeyException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse("A Product with the same text already exists"));
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity handleNotFoundException(NotFoundException ex) {
        return ResponseEntity.notFound().build();
    }
}