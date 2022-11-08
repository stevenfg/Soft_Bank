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
  Dropdown,
} from "reactstrap";

const EventReg = () => {
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [mobileno, setmobileno] = useState("");
    const [emailid, setemailid] = useState("");
    const [gender, setgender] = useState("");
    const [event,setevent] = useState("");
    
    

  return (
    <Container className="p-4">
      <h2 className="text-center py-3">Event registration Page</h2>
      <Form>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="name" sm={3} lg={2}>
            Name
          </Label>
          <Col sm={9} lg={4}>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>{
                setname(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="address" sm={3} lg={2}>
            Address
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="address"
              name="address"
              placeholder="enter your address"
              value={address}
              onChange={(e)=>{
                setaddress(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="mobileno" sm={3} lg={2}>
            Mobile No
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="mobileno"
              name="mobileno"
              placeholder="enter your mobileno"
              value={mobileno}
              onChange={(e)=>{
                setmobileno(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="emailid" sm={3} lg={2}>
          E-mail Id
          </Label>

          <Col sm={9} lg={4}>
            <Input
              id="emailid"
              name="emailid"
              placeholder="Enter your email id"
              value={emailid}
              onChange={(e)=>{
                setemailid(e.target.value);
              }}
              type="text"
            />
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="gender" sm={3} lg={2}>
          Gender
          </Label>

          <Col sm={9} lg={4}>
           
            <select id="gender" onChange={(e)=>setgender(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="select a gender">select a gender</option>
                    <option value="Male" >Male</option>
                    <option value="Female">Female</option>
                    <option value="other">other</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        
        
        
        <FormGroup row>
          <Col lg={3}></Col>
          <Label for="event" sm={3} lg={2}>
          Events
          </Label>

          <Col sm={9} lg={4}>
          <select id="event" onChange={(e)=>setevent(e.target.value)} style={{width:"100%",padding:"7px",borderRadius:"5px"}}>
                    <option value="choose event">choose event</option>
                    <option value="meetgreet 22/11/22" >meetgreet 22/11/22</option>
                    <option value="exhibition 23/11/22">exhibition 23/11/22</option>
                    <option value="business meet 24/11/22">business meet 24/11/22</option>

              </select>
              {/* {console.log("option check "+securityquestion)} */}
          </Col>
          <Col lg={3}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col className="d-flex justify-content-center">
            <Button>Register</Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default EventReg