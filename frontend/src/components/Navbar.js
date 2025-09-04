import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarC = () => {
  return (
    <Navbar collapseOnSelect expand="lg"  className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="Trendy Pack Nigeria Ltd."
            src="/images/TP.png"
            className="d-inline-block align-top logo "
          />{" "}
          <p>Trendy Pack Nigeria Ltd.</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <NavDropdown title="Products" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Tapes</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Cloth</NavDropdown.Item>
            <NavDropdown.Item href="#action5">Markers</NavDropdown.Item>
            <NavDropdown.Item>PU tube for Airshaft</NavDropdown.Item>
            <NavDropdown.Item>Air Shift Valve</NavDropdown.Item>
            <NavDropdown.Item>Adhesive Hose pipe </NavDropdown.Item>
            <NavDropdown.Item>Nord Gear Box Coupling</NavDropdown.Item>
            <NavDropdown.Item>NRV Valve (Nuematic Actuator )</NavDropdown.Item>
            <NavDropdown.Item>Blade</NavDropdown.Item>
            <NavDropdown.Item>Adhesive mixing Head </NavDropdown.Item>
            <NavDropdown.Item>Static Mixer for adhesive </NavDropdown.Item>
            <NavDropdown.Item>Adhesive mixer holder </NavDropdown.Item>
            <NavDropdown.Item>Teflon Dam</NavDropdown.Item>
            <NavDropdown.Item>Barcode rod </NavDropdown.Item>
            <NavDropdown.Item>Barcode Pad </NavDropdown.Item>
            <NavDropdown.Item>Adhesive filter</NavDropdown.Item>
            <NavDropdown.Item>Magnatic Powder for Break </NavDropdown.Item>
            <NavDropdown.Item>Micrometer Mitutoyo</NavDropdown.Item>
            <NavDropdown.Item>GSM template</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
         <Nav>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
