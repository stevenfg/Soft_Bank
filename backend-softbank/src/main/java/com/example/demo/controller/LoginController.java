package com.example.demo.controller;

import java.util.List;

import com.example.demo.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.repository.LoginRepo;
import com.example.demo.repository.UserRepository;



@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginRepo loginRepo;


    @PostMapping("/register")
    public User register(@RequestBody User user){
        return loginRepo.save(user);
    }

    @PostMapping("/login")
    public Boolean login(@RequestBody User user){
        return loginRepo.findByUsername(user.getUsername(), user.getPassword()).size()==1;
    }



}
