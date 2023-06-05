package com.microservice.product.repository;

import com.microservice.product.model.Product;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Access all CRUD methods -> findAll(), findById(ID id), save(S entity), delete(T entity).
 */
@Repository
public interface ProductRepository extends ReactiveMongoRepository<Product, String> {

}