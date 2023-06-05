package com.microservice.basket.repository;

import com.microservice.basket.model.Basket;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Access all CRUD methods -> findAll(), findById(ID id), save(S entity), delete(T entity).
 */
@Repository
public interface BasketRepository extends ReactiveMongoRepository<Basket, String> {

}