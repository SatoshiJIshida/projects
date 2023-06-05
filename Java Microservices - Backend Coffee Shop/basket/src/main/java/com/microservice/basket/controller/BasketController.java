package com.microservice.basket.controller;

import com.microservice.basket.model.Basket;
import com.microservice.basket.repository.BasketRepository;
import com.microservice.basket.exception.NotFoundException;
import com.microservice.basket.payload.response.ErrorResponse;
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
public class BasketController {

    @Autowired
    private BasketRepository basketRepository;

    @PostMapping("/basket")
    public Mono<Basket> addToBasket(@Valid @RequestBody Basket basket) {
        return basketRepository.save(basket);
    }

    @GetMapping("/basket")
    public Flux<Basket> getBasketProducts() {
        return basketRepository.findAll();
    }

    @PutMapping("/basket/{id}")
    public Mono<ResponseEntity<Basket>> updateBasket(@PathVariable(value = "id") String basketId,
                                                   @Valid @RequestBody Basket basket) {
        return basketRepository.findById(basketId)
                .flatMap(existingBasket -> {
                    existingBasket.setProducts(basket.getProducts());
                    return basketRepository.save(existingBasket);
                })
                .map(updateBasket-> new ResponseEntity<>(updateBasket, HttpStatus.OK))
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/basket/{id}")
    public Mono<ResponseEntity<Void>> deleteBasket(@PathVariable(value = "id") String basketId) {

        return basketRepository.findById(basketId)
                .flatMap(existingBasket ->
                        basketRepository.delete(existingBasket)
                            .then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK)))
                )
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity handleDuplicateKeyException(DuplicateKeyException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(new ErrorResponse("A Basket with the same text already exists"));
    }

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity handleNotFoundException(NotFoundException ex) {
        return ResponseEntity.notFound().build();
    }
}