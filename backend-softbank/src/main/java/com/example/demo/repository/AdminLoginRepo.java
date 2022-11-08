package com.example.demo.repository;

import com.example.demo.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminLoginRepo extends JpaRepository<Admin,Long>{

	@Query(value = "SELECT * FROM admin WHERE username = ?1 and password=?2", nativeQuery = true)
	  List<Admin> findByUsername(String username,String password);

}
