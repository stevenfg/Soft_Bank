package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Newfd;
import com.example.demo.repository.NewfdRepo;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class NewfdController {
	
	
	@Autowired
	private NewfdRepo newfdRepo;
	
	@GetMapping("/newfd")
	public List<Newfd> getAllusers(){
		return newfdRepo.findAll();	
		
		
	}
	@PostMapping("/newfd")
	public Newfd fundTransfer(@RequestBody Newfd newfd){
		return newfdRepo.save(newfd);	

}

	
	
	
}
