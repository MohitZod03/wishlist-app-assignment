package com.example.wishlist_backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    private String id;
    private String wishlistId;
    private String name;
    private String imageUrl;
    private String price;
    private String addedBy;
}
