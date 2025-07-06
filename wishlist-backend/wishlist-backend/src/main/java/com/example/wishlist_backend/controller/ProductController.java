package com.example.wishlist_backend.controller;

import com.example.wishlist_backend.model.Product;
import com.example.wishlist_backend.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlists/{wishlistId}/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getProducts(@PathVariable String wishlistId) {
        return productRepository.findByWishlistId(wishlistId);
    }

    @PostMapping
    public Product addProduct(@PathVariable String wishlistId, @RequestBody Product product) {
        product.setWishlistId(wishlistId);
        return productRepository.save(product);
    }
}
