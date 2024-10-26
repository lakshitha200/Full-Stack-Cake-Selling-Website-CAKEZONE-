package com.lakshithafdo.cakezone_backend.Repository;

import com.lakshithafdo.cakezone_backend.Entity.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Products,Long> {
}
