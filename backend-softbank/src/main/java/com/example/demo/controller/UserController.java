package com.example.demo.controller;

import java.util.List;

import com.example.demo.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;



@RestController
//@RequestMapping("/api/v1/")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepo.findAll();
	}

	@GetMapping("/viewuser/{id}")
	User getUserById(@PathVariable Long id) {
		System.out.println(id);
		return userRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Sup"));
	}
}
