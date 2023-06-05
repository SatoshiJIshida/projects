package com.microservice.order.repository;

import com.microservice.order.model.Order;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Access all CRUD methods -> findAll(), findById(ID id), save(S entity), delete(T entity).
 */
@Repository
public interface OrderRepository extends ReactiveMongoRepository<Order, String> {
    
}