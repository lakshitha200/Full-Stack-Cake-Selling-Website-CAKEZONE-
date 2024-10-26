package com.lakshithafdo.cakezone_backend.Controller;

import com.lakshithafdo.cakezone_backend.Entity.Products;
import com.lakshithafdo.cakezone_backend.Service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@CrossOrigin("*")
@AllArgsConstructor
public class ProductController {

    private ProductService productService;

    //GetAll Rest Api
    @GetMapping
    public List<Products> getAllProducts(){
        return productService.getAllProducts();
    }

    //Get by Id Rest Api
    @GetMapping("/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable("id") long id){
        return new ResponseEntity<Products>(productService.getProductById(id), HttpStatus.OK);
    }
}
