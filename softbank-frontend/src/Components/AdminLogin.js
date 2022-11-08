import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  FormText,
  Button,
} from "reactstrap";

const AdminLogin = () => {
    
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");

  
  const validateAForm = (values) => {
    const error = {};
    if (!values.username) {
      error.username = "Email is required";
    } 
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  function populateStorage(username) {
    window.localStorage.setItem('adminsessionId', username);
  }

  const loginHandler = (e) => {

    
    e.preventDefault();
    setFormErrors(validateAForm({username,password}));

    if(Object.keys(formErrors).length===0){
    axios.post("http://localhost:8080/api/v1/adminlogin", {username,password}).then((res) => {
        console.log(res.data);
        populateStorage(username);
        
        if (res.data) {
          navigate("/users");
        } 
        else alert("Invalid Login Please Register");
      })
    };
    setIsSubmit(true);
  };

  return (
    <Container className="p-4">
      {/* <h2 className="text-center py-3">Admin Login</h2> */}
      <Form onSubmit={loginHandler}>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="username" sm={3} lg={2}>
            User Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="username"
              name="username"
              placeholder="Enter your User name"
              value={username}
              onChange={(e)=>{
                setusername(e.target.value);
              }}
              type="text"
            />
            <p style={{ color: "red" }}>{formErrors.username}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>

        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="password" sm={3} lg={2}>
            Password
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value);

              }}
              type="password"
            />
            <p style={{ color: "red" }}>{formErrors.password}</p>
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button className="m-3">login</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default AdminLogin