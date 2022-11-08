package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.FundTransfer;
import com.example.demo.repository.FundTransferRepo;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin
public class FundTransferController {
	
	
	@Autowired
	private FundTransferRepo fundTransferRepo;
	
	@GetMapping("/fundtransfer")
	public List<FundTransfer> getAllusers(){
		return fundTransferRepo.findAll();	
		
		
	}
	@PostMapping("/fundtransfer")
	public FundTransfer fundTransfer(@RequestBody FundTransfer fundTransfer){
		return fundTransferRepo.save(fundTransfer);	
		
		
	}
	
	
	
	

}
