import React from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


const Menu = () => {

  const navigate = useNavigate();
  var x = window.localStorage.getItem("sessionId");
  var ses;
  const BalanceHandler = (e) => {
    navigate("/balance",{ses, x})
   };
  const registerHandler = (e) => {
    navigate("/fundtransfer")
   };
   const newfdHandler = (e) => {
    navigate("/newfd")
   };
   const eventHandler = (e) => {
    navigate("/events")
   };
   const atmHandler = (e) => {
    navigate("/atmpin")
   };
   const logoutHandler = (e) => {
    alert("logged out successfully..");
    navigate("/login")
   };
   

  return (
    <Container className="p-5" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      
    
      <Button onClick={BalanceHandler} color="warning" size="md" className="m-3"  style={{width:"400px"}}>
      <b>Check Balance of </b>
      </Button>
      <Button onClick={registerHandler} color="warning" size="md" className="m-3" style={{width:"400px"}}>
        <b>Fund Transfer</b>
      </Button>
      <Button onClick={newfdHandler} color="warning" size="md" className="m-3" style={{width:"400px"}}>
        <b>Open New FD</b>
      </Button>
      <Button onClick={eventHandler} color="warning" size="md" className="m-3" style={{width:"400px"}}>
        <b>Events</b>
      </Button>
      <Button onClick={atmHandler} color="warning" size="md" className="m-3" style={{width:"400px"}}>
        <b>Change ATM Pin</b>
      </Button>
      <Button onClick={logoutHandler} color="warning" size="md" className="m-3" style={{width:"400px"}}>
       <b> Logout</b>
      </Button>

      
    </Container>
  );
};

export default Menu;