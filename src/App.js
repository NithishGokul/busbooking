import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@mui/material';

import Login from './components/Loginpg';
import './App.css';

import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BusDetails from './components/BusDetails';
import TicketBooking from './components/TicketBooking';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Button component={Link} to="/" color="inherit" className='
          {classes.button}'>
            🚇Booking🚇
          </Button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Button component={Link} to="/" color="inherit">
                  Home
                </Button>
              </li>
              <li className="nav-item">
                <Button component={Link} to="/loginpg" color="inherit">
                  Login
                </Button>
              </li>
              <li className="nav-item">
                <Button component={Link} to="/register" color="inherit">
                  Register
                </Button>
              </li>
              <li className='nav-item'>
                <Button component={Link} to="/AboutUs" color="inherit">
                  AboutUs
                </Button>
              </li>
              <li className='nav-item'>
                <Button component={Link} to="/Contact" color="inherit">
                  Contact
                </Button>
              </li>
            </ul>
          </div>
          
        </nav>
        <Routes>
        <Route path="/Loginpg" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
         
          <Route path="/contact" element={<Contact/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/BusDetails' element={<BusDetails/>}/>
          <Route path="/booking/:id" element={<TicketBooking />} />
          <Route path="/Payment" element={<Payment/>}/>
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;
