import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LightTheme from '../../themes/Light';
import { Link, withRouter } from "react-router-dom"
import { AuthConsumer } from '../../providers/AuthProvider'

const Navigator = ({theme, user, handleLogout, location, history }) => {

    if (user) {
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg={theme == LightTheme ? "light" : "dark"}
          variant={theme == LightTheme ? "light" : "dark"}
        >
          <Navbar.Brand href="/">MainMenu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="/restaurants">Restaurants</Nav.Link>
              <Nav.Link onClick={() => handleLogout(history)}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar
          collapseOnSelect
          expand="lg"
          bg={theme == LightTheme ? "light" : "dark"}
          variant={theme == LightTheme ? "light" : "dark"}
        >
          <Navbar.Brand href="/">MainMenu</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="/restaurants">Restaurants</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  };



const ConnectedNavigator = (props) => (
  <AuthConsumer>{(auth) => <Navigator {...props} {...auth} />}</AuthConsumer>
);


export default withRouter(ConnectedNavigator);
