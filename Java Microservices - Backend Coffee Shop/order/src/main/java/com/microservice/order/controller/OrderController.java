package com.microservice.order.controller;

import com.microservice.order.model.Order;
import com.microservice.order.repository.OrderRepository;
import com.microservice.order.exception.NotFoundException;
import com.microservice.order.payload.response.ErrorResponse;
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
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/order")
    public Mono<Order> addOrder(@Valid @RequestBody Order order) {
        return orderRepository.save(order);
    }

    @GetMapping("/order")
    public Flux<Order> getOrder() {
        return orderRepository.findAll();
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity handleDuplicateKeyException(DuplicateKeyException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse("This Order already exists"));
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity handleNotFoundException(NotFoundException ex) {
        return ResponseEntity.notFound().build();
    }
}