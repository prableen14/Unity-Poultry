import React from "react";
import Logo from '../assets/Poultry.png';
import * as ReactBootStrap from "react-bootstrap";
import {Link} from "react-router-dom";

function Header(){ 

    return  <div className="container">  
  <ReactBootStrap.Navbar style={{backgroundColor:"white"}}  expand="lg" fixed="top">
  <Link to="/"><ReactBootStrap.Navbar.Brand>
      <img
        src={Logo}
        width="90"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"/>
      </ReactBootStrap.Navbar.Brand>
      </Link>
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="ml-auto">
      <Link to="/"><ReactBootStrap.Nav className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}} >Home</ReactBootStrap.Nav></Link>
      <Link to="/about"><ReactBootStrap.Nav   className="pr-5 pt-1"style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>About</ReactBootStrap.Nav></Link> 
      <Link to="/services"><ReactBootStrap.Nav   className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Services </ReactBootStrap.Nav></Link>
      <Link to="/user"><ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Users</ReactBootStrap.Nav></Link>
      <Link to="/MarketPrices"> <ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Market Prices</ReactBootStrap.Nav></Link>
      <Link to="/review"><ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Testimonials</ReactBootStrap.Nav></Link>
      <Link to="/privacy"><ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Privacy Policy</ReactBootStrap.Nav></Link>
      <Link to="/contact"> <ReactBootStrap.Nav  className="pr-5 pt-1" style={{color:"#002e5b",fontFamily: "'Open Sans', sans-serif"}}>Contact Us</ReactBootStrap.Nav></Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
    </div>
}   
export default Header;
