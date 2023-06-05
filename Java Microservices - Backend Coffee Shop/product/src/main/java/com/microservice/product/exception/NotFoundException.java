package com.microservice.product.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String productId) {
        super("Product not found with id: " + productId);
    }
}