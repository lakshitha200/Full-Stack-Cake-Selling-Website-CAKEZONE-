package com.lakshithafdo.cakezone_backend.Repository;

import com.lakshithafdo.cakezone_backend.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Long> {


}
