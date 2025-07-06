package com.example.wishlist_backend.repository;

import com.example.wishlist_backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
    List<Product> findByWishlistId(String wishlistId);
}
