package com.lakshithafdo.cakezone_backend.Service.Impl;

import com.lakshithafdo.cakezone_backend.Entity.Customer;
import com.lakshithafdo.cakezone_backend.Entity.Order;
import com.lakshithafdo.cakezone_backend.Repository.CustomerRepository;
import com.lakshithafdo.cakezone_backend.Repository.OrderRepository;
import com.lakshithafdo.cakezone_backend.Service.CustomerService;
import com.lakshithafdo.cakezone_backend.Service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
@AllArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;


    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getCustomerById(long id) {
        Customer exsitingCustomer = customerRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Customer is Not Found")
        );
        return exsitingCustomer;
    }
}
