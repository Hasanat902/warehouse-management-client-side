import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" className="background" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">CAR <span className="text-success">BD</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/home" className="text-dark fs-6 fw-bold">Home</Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="text-dark fs-6 fw-bold">Blogs</Nav.Link>

              <Nav.Link as={Link} to="/login" className="text-dark fs-6 fw-bold">LogIn</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
