import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavbarC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown title="Tapes" id="tapesScrollingDropdown">
                <NavDropdown.Item href="#action4">BOPP Tape</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Cork Tape</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Netto Tape</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Silicon Tape
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Barcode" id="barcodeScrollingDropdown">
                <NavDropdown.Item href="#action4">Barcode rod</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Barcode Pad</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item href="#action4">Viscosity cup</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Treatment Marker
              </NavDropdown.Item>
              <NavDropdown.Item>Adhesive filter</NavDropdown.Item>
              <NavDropdown.Item>Magnatic Powder for Break </NavDropdown.Item>
              <NavDropdown.Item>Micrometer Mitutoyo</NavDropdown.Item>
              <NavDropdown.Item>GSM template</NavDropdown.Item>
              <NavDropdown.Item>
                Silicon Rubber for World mixer trank
              </NavDropdown.Item>
              <NavDropdown
                title="PU tube for Airshaft"
                id="putubeScrollingDropdown"
              >
                <NavDropdown.Item href="#action4">15mm</NavDropdown.Item>
                <NavDropdown.Item href="#action4">19mm</NavDropdown.Item>
                <NavDropdown.Item href="#action4">24mm</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item>Air Shift Valve</NavDropdown.Item>
              <NavDropdown.Item>Adhesive Hose pipe </NavDropdown.Item>
              <NavDropdown.Item>Nord Gear Box Coupling</NavDropdown.Item>
              <NavDropdown.Item>
                NRV Valve (Nuematic Actuator )
              </NavDropdown.Item>
              <NavDropdown title="Blade" id="bladeScrollingDropdown">
                <NavDropdown.Item href="#action4">Luzt Blade</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tiger Blade</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Paper Core cutter blade
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Doctor Blade
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Adhesive Mixer" id="mixerScrollingDropdown">
                <NavDropdown.Item href="#action4">
                  Static Mixer for adhesive
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Adhesive mixer holder
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Adhesive mixing Head
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Doctor Blade
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Item>Teflon Dam</NavDropdown.Item>
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
