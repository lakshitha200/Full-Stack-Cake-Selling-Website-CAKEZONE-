package com.lakshithafdo.cakezone_backend.Service;

import com.lakshithafdo.cakezone_backend.Entity.Customer;

import java.util.List;

public interface CustomerService {
    List<Customer> getAllCustomers();

    Customer getCustomerById(long id);
}
