package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fdtable")
public class Newfd {
	
	@Id
	private Long fromaccount;
	
	private String amount;
	
	private String fdperiod;
	
	private String fdproduct;
	
	
	 public Newfd() {
		// TODO Auto-generated constructor stub
	 
	    	
	    }
	
	
	
	public Newfd(String amount, String fdperiod, String fdproduct) {
		super();
		this.amount = amount;
		this.fdperiod = fdperiod;
		this.fdproduct = fdproduct;
	}
	public Long getFromaccount() {
		return fromaccount;
	}
	public void setFromaccountLong(Long fromaccountLong) {
		this.fromaccount = fromaccountLong;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getFdperiod() {
		return fdperiod;
	}
	public void setFdperiod(String fdperiod) {
		this.fdperiod = fdperiod;
	}
	public String getFdproduct() {
		return fdproduct;
	}
	public void setFdproduct(String fdproduct) {
		this.fdproduct = fdproduct;
	}
	
	

}
