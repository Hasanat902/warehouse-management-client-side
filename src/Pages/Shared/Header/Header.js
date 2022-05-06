import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" className="background" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">CAR <span className="text-success">BD</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-dark fs-6 fw-bold">Home</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="text-dark fs-6 fw-bold">Blogs</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
