package com.lakshithafdo.cakezone_backend.Entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long oId;
    private long orderNumber;
    private String orderDate;
    private int quantity;
    private String orderState;
    private String totalPrice;

    @ManyToOne
    @JoinColumn (name = "fk_product")
    private Products product;


    @ManyToOne
    @JoinColumn (name = "fk_customer")
    private Customer customer;




}