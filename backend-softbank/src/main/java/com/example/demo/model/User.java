package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")

public class User {

	@Id
	private int id;

	private Long accountnumber;

	@Column(name = "name")
    private String name;

	@Column(name = "password")
    private String password;

	@Column(name = "middlename")
    private String middlename;

	@Column(name = "lastname")
    private String lastname;

	@Column(name = "username")
    private String username;

	@Column(name = "securityquestion")
    private String securityquestion;

	@Column(name = "securityanswer")
    private String securityanswer;

	@Column(name = "accounttype")
    private String accounttype;




	public User(String name, String password, String middlename, String lastname, String username,
			String securityquestion, String securityanswer, String accounttype) {
		super();
		this.name = name;
		this.password = password;
		this.middlename = middlename;
		this.lastname = lastname;
		this.username = username;
		this.securityquestion = securityquestion;
		this.securityanswer = securityanswer;
		this.accounttype = accounttype;
	}

	public User() {

	}


	public Long getAccountnumber() {
		return accountnumber;
	}


	public void setAccountnumber(Long accountnumber) {
		this.accountnumber = accountnumber;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getMiddlename() {
		return middlename;
	}


	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getSecurityquestion() {
		return securityquestion;
	}


	public void setSecurityquestion(String securityquestion) {
		this.securityquestion = securityquestion;
	}


	public String getSecurityanswer() {
		return securityanswer;
	}


	public void setSecurityanswer(String securityanswer) {
		this.securityanswer = securityanswer;
	}


	public String getAccounttype() {
		return accounttype;
	}


	public void setAccounttype(String accounttype) {
		this.accounttype = accounttype;
	}

}



