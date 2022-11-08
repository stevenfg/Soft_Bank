import React from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


const Events = () => {

  const navigate = useNavigate();
  const EventReg = (e) => {
    navigate("/eventreg")
   };
   const EventLog = (e) => {
    navigate("/eventlog")
   };
   

  return (
    <Container className="p-5" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Button onClick={EventReg} color="warning" size="md" className="m-3" style={{width:"400px"}}>
        <b>Event Registration</b>
      </Button>
      <Button onClick={EventLog} color="warning" size="md" className="m-3" style={{width:"400px"}}>
        <b>Event Login</b>
      </Button>
     
     
      
    </Container>
  );
};

export default Events;