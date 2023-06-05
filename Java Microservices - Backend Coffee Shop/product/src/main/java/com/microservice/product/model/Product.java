package com.microservice.product.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.ToString;
import lombok.Builder;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Document(collection = "products")
public class Product {
    @Id
    private String id;

    @NotBlank
    @Size(max = 140)
    private String productName;

    @NotBlank
    @Size(max = 140)
    private String productDescription;

    @NotNull
    private double productPrice;

    @NotNull
    private int productQuantity;

    @NotNull
    private Date createdAt = new Date();
}