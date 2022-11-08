package com.example.demo.repository;

import 	java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public interface LoginRepo extends JpaRepository<User,Long>{

	@Query(value = "SELECT * FROM users WHERE username = ?1 and password=?2", nativeQuery = true)
	  List<User> findByUsername(String username,String password);

}
