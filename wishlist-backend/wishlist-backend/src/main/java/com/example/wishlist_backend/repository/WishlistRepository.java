package com.example.wishlist_backend.repository;


import com.example.wishlist_backend.model.Wishlist;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface WishlistRepository extends MongoRepository<Wishlist, String> {
    List<Wishlist> findByCreatedBy(String email);
}
