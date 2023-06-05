package com.microservice.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;

@SpringBootApplication
public class ProductApplication {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(ProductApplication.class, args);
	}
}