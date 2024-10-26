package com.lakshithafdo.cakezone_backend.Controller;

import com.lakshithafdo.cakezone_backend.Entity.Customer;
import com.lakshithafdo.cakezone_backend.Entity.Order;
import com.lakshithafdo.cakezone_backend.Service.CustomerService;
import com.lakshithafdo.cakezone_backend.Service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/customers")
@AllArgsConstructor
public class CustomerController {

    private CustomerService customerService;

    @GetMapping()
    public List<Customer> getAllCustomer(){
        return customerService.getAllCustomers();
    }

    @GetMapping("/{id}")
    public Customer getCustomerById(@PathVariable("id") long id){
        return customerService.getCustomerById(id);
    }
}
