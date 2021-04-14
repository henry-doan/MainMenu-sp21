import React from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import LightTheme from '../../themes/Light';
import {useContext}from 'react';
import {Link,useHistory} from "react-router-dom"
import { AuthContext } from '../../providers/AuthProvider'

const Navigator = ({theme, user, handleLogout, location, history }) => {

  return (
    
  <Navbar collapseOnSelect expand="lg" bg={theme == LightTheme ? "light":"dark"} variant={theme == LightTheme ? "light":"dark"} >
  <Navbar.Brand href="/">MainMenu</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
      
    <Nav className="justify-content-end">
     <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

  )
}


export default Navigator;
