package com.lakshithafdo.cakezone_backend.Repository;

import com.lakshithafdo.cakezone_backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {
}
