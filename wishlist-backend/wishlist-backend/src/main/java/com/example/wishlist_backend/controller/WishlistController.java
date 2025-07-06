package com.example.wishlist_backend.controller;

import com.example.wishlist_backend.model.Wishlist;
import com.example.wishlist_backend.repository.WishlistRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlists")
@CrossOrigin(origins = "http://localhost:3000")
public class WishlistController {

    private final WishlistRepository wishlistRepository;

    public WishlistController(WishlistRepository wishlistRepository) {
        this.wishlistRepository = wishlistRepository;
    }

    @GetMapping("/{email}")
    public List<Wishlist> getWishlists(@PathVariable String email) {
        return wishlistRepository.findByCreatedBy(email);
    }

    @PostMapping
    public Wishlist createWishlist(@RequestBody Wishlist wishlist) {
        return wishlistRepository.save(wishlist);
    }
}
