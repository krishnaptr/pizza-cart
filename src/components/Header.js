import React from 'react';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from '../images/pizza-logo.png';

const Header = () => {
   return(
    <Navbar bg="none" expand="lg">
    <Container>
          <img alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top"/>
        <Navbar.Brand href="#home" className="brand-name">Pizzy Pizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav
            className="gap-2 my-2 my-lg-10 me-4"
         >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search pizza..."
          className="me-2"
          aria-label="Search"
        />
        <Button className="search">Search</Button>
      </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
   )
}

export default Header;