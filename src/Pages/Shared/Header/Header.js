import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css';

const Header = () => {

  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="info" className="background" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">CAR <span className="text-success">BD</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link as={CustomLink} to="/home" className="text-white fs-6 fw-bold">Home</Nav.Link>
              <Nav.Link as={CustomLink} to="/blogs" className="text-white fs-6 fw-bold">Blogs</Nav.Link>
              {
                user && 
                <>
                  <Nav.Link as={CustomLink} to="/manageInv" className="text-white fs-6 fw-bold">Manage Items</Nav.Link>

                  <Nav.Link as={CustomLink} to="/addItem" className="text-white fs-6 fw-bold">Add Items</Nav.Link>
                  <Nav.Link as={CustomLink} to="/myItems" className="text-white fs-6 fw-bold">My Items</Nav.Link>
                </>
              }

              {
                user ?
                <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-white fs-6 fw-bold">SignOut</button>
                : 
                <Nav.Link as={Link} to="/login" className="text-white fs-6 fw-bold">LogIn</Nav.Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
