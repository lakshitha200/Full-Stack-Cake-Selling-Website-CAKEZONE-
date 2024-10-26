package com.lakshithafdo.cakezone_backend.Service.Impl;

import com.lakshithafdo.cakezone_backend.Entity.Order;
import com.lakshithafdo.cakezone_backend.Repository.OrderRepository;
import com.lakshithafdo.cakezone_backend.Service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
@AllArgsConstructor
public class OderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) {
        order.setOrderDate(String.valueOf(new Date()));
        order.setOrderState("PENDING");
        return orderRepository.save(order);
    }

    @Override
    public Order getOrdersById(long id) {
        Order exsitingOrder = orderRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Order is Not Found")
        );
        return exsitingOrder;
    }

    @Override
    public Order updateOrder(Order order, long id) {
        Order order1 = orderRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Order is Not Found")
        );

        order1.setOrderState(order.getOrderState());

        return orderRepository.save(order1);
    }

//    @Override
//    public void deleteOrder(long id) {
//        orderRepository.findById(id).orElseThrow(
//                () -> new ResourceNotFoundException("Order is Not Found")
//        );
//        orderRepository.deleteById(id);
//    }


}
