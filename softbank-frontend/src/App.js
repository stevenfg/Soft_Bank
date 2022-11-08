import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Menu from './Components/Menu';
import Register from './Components/Register';
import Fundtransfer from './Components/Fundtransfer';
import Newfd from './Components/Newfd';
import Atmpin from './Components/Atmpin';
import Event from './Components/Events';
import EventReg from './Components/EventReg';
import EventLog from './Components/EventLogin';
import View from './Components/view';
import ViewUser from './Components/viewUser';
import Admin from './Components/AdminLogin';




var x;
function App() {
  return (
    <>
    <Router>
        
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/menu' element={<Menu/>}></Route>
          <Route path='/fundtransfer' element={<Fundtransfer/>}></Route>
          <Route path='/newfd' element={<Newfd/>}></Route>
          <Route path='/atmpin' element={<Atmpin/>}></Route>
          <Route path='/events' element={<Event/>}></Route>
          <Route path='/eventreg' element={<EventReg/>}></Route>
          <Route path='/eventlog' element={<EventLog/>}></Route>
          <Route path='/users' element={<View/>}></Route>
          <Route path='/viewuser' element={<ViewUser/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;