package com.microservice.basket.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String basketId) {
        super("Basket not found with id: " + basketId);
    }
}