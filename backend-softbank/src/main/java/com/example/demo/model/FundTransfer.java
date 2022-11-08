package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "fundtransfer")
public class FundTransfer {
	@Id
	private Long fromaccount;
	
	private String benificiaryaccount;
	
	private String benificiaryifsccode;
	
	private String amount;
	
	private String benificiary;
	
	private String remarks;
	
	private String benificiaryaccounttype;
	
	
	
	public FundTransfer(String benificiaryaccount, String benificiaryifsccode, String amount, String benificiary,
			String remarks, String benificiaryaccounttype) {
		super();
		this.benificiaryaccount = benificiaryaccount;
		this.benificiaryifsccode = benificiaryifsccode;
		this.amount = amount;
		this.benificiary = benificiary;
		this.remarks = remarks;
		this.benificiaryaccounttype = benificiaryaccounttype;
	}
	public Long getFromaccount() {
		return fromaccount;
	}
	public void setFromaccount(Long fromaccount) {
		this.fromaccount = fromaccount;
	}
	public String getBenificiaryaccount() {
		return benificiaryaccount;
	}
	public void setBenificiaryaccount(String benificiaryaccount) {
		this.benificiaryaccount = benificiaryaccount;
	}
	public String getBenificiaryifsccode() {
		return benificiaryifsccode;
	}
	public void setBenificiaryifsccode(String benificiaryifsccode) {
		this.benificiaryifsccode = benificiaryifsccode;
	}
	public String getAmount() {
		return amount;
	}
	public FundTransfer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getBenificiary() {
		return benificiary;
	}
	public void setBenificiary(String benificiary) {
		this.benificiary = benificiary;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getBenificiaryaccounttype() {
		return benificiaryaccounttype;
	}
	public void setBenificiaryaccounttype(String benificiaryaccounttype) {
		this.benificiaryaccounttype = benificiaryaccounttype;
	}
	
	
	
}
