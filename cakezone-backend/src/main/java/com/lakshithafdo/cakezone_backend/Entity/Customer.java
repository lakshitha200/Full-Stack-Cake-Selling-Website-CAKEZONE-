package com.lakshithafdo.cakezone_backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cId;
    @Column(nullable = false, unique = true)
    private Long cusNumber;
    private String name;
    @Column(nullable = false, unique = true)
    private String username;
    private String location;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false, unique = true)
    private String password;
    @Column(nullable = false, unique = true)
    private int phone;
    //    private String img;
    private String role = "ROLE_CUSTOMER";
}