import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
  <div>
    <Navbar bg="dark" className="nav-root">
      <Navbar.Brand className="nav-brand" href="#home">The Proto Co.</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-links" href="#products">Products</Nav.Link>
        <Nav.Link className="nav-links" href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
