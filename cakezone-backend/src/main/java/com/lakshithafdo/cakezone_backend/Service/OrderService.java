package com.lakshithafdo.cakezone_backend.Service;

import com.lakshithafdo.cakezone_backend.Entity.Order;

import java.util.List;

public interface OrderService {
    List<Order> getAllOrders();

    Order createOrder(Order order);

    Order getOrdersById(long id);

    Order updateOrder(Order order, long id);
}
