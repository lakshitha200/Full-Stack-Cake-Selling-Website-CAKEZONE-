package com.lakshithafdo.cakezone_backend.Controller;


import com.lakshithafdo.cakezone_backend.Entity.Order;
import com.lakshithafdo.cakezone_backend.Service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/orders")
@AllArgsConstructor
public class OrderController {

    private OrderService orderService;

    @GetMapping()
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    @PostMapping()
    public ResponseEntity<Order> saveOrder(@RequestBody Order order){
        return new ResponseEntity<Order>(orderService.createOrder(order), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public Order getOrdersById(@PathVariable("id") long id){
        return orderService.getOrdersById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") long id ,@RequestBody Order order){
        return new ResponseEntity<Order>(orderService.updateOrder(order,id),HttpStatus.OK);
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> deleteOrder(@PathVariable("id") long id){
//        orderService.deleteOrder(id);
//        return new ResponseEntity<String>("Deleted",HttpStatus.OK);
//    }
}
