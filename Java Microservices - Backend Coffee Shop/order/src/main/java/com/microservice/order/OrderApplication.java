package com.microservice.order;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.IOException;

@SpringBootApplication
public class OrderApplication {
	public static void main(String[] args) throws IOException {
		SpringApplication.run(OrderApplication.class, args);
	}
}