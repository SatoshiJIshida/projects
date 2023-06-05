package com.microservice.order.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String orderId) {
        super("Order not found with id: " + orderId);
    }
}