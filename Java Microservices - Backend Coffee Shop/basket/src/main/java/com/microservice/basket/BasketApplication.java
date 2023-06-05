package com.microservice.basket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;

@SpringBootApplication
public class BasketApplication {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(BasketApplication.class, args);
	}
}