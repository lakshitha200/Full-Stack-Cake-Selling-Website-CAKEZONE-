package com.lakshithafdo.cakezone_backend.Service.Impl;

import com.lakshithafdo.cakezone_backend.Entity.Products;
import com.lakshithafdo.cakezone_backend.Repository.ProductRepository;
import com.lakshithafdo.cakezone_backend.Service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    @Override
    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Products getProductById(long id) {
        Products existingProduct = productRepository.findById(id).orElseThrow(
                ()-> new RuntimeException()
        );
        return existingProduct;
    }
}
