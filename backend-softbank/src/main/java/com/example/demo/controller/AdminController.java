package com.example.demo.controller;

import java.util.List;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.AdminLoginRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminLoginRepo;



@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminLoginRepo adminRepo;

    @PostMapping("/adminlogin")
    public Boolean login(@RequestBody Admin admin){
        return adminRepo.findByUsername(admin.getUsername(), admin.getPassword()).size()==1;
    }
}
