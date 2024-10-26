package com.lakshithafdo.cakezone_backend.Service;

import com.lakshithafdo.cakezone_backend.Entity.Products;

import java.util.List;

public interface ProductService {
    List<Products> getAllProducts();

    Products getProductById(long id);
}
