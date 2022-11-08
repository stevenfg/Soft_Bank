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

const Atmpin = () => {
    const [oldpin, setoldpin] = useState("");
    const [newpin, setnewpin] = useState("");
    const [confirmpin, setconfirmpin] = useState("");
    return (
        <Container className="p-4">
          <h2 className="text-center py-3">Change ATM Pin</h2>
          <Form>
            <FormGroup row>
              <Col lg={3}></Col>
              <Label for="oldpin" sm={3} lg={2}>
              Old Pin
              </Label>
              <Col sm={9} lg={4}>
                <Input
                  id="oldpin"
                  name="oldpin"
                  placeholder="Enter your old pin"
                  value={oldpin}
                  onChange={(e)=>{
                    setoldpin(e.target.value);
                  }}
                  type="text"
                />
              </Col>
              <Col lg={3}></Col>
            </FormGroup>
            <FormGroup row>
              <Col lg={3}></Col>
              <Label for="newpin" sm={3} lg={2}>
                New Pin
              </Label>
    
              <Col sm={9} lg={4}>
                <Input
                  id="newpin"
                  name="newpin"
                  placeholder="enter new pin"
                  value={newpin}
                  onChange={(e)=>{
                    setnewpin(e.target.value);
                  }}
                  type="password"
                />
              </Col>
              <Col lg={3}></Col>
            </FormGroup>
            <FormGroup row>
              <Col lg={3}></Col>
              <Label for="confirmpin" sm={3} lg={2}>
              Confirm Pin
              </Label>
    
              <Col sm={9} lg={4}>
                <Input
                  id="confirmpin"
                  name="confirmpin"
                  placeholder="confirm new pin"
                  value={confirmpin}
                  onChange={(e)=>{
                    setconfirmpin(e.target.value);
                  }}
                  type="password"
                />
              </Col>
              <Col lg={3}></Col>
            </FormGroup>
            <Col className="d-flex justify-content-center">
            <Button>Change</Button>
          </Col>
      </Form>
    </Container>
  )
}

export default Atmpin