import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer" >
     <Container className="address-band"> 
       <Row direction="horizontal" gap="5">
        <Col xs={12} sm={12} md={3} lg={3}>Trendy Pack Nigeria Ltd.</Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4>Address</h4>
          <p>De Real House, 4/5, Irewole Estate,</p>
          <p>Off Idiroko Road, Sango Ota,</p>
          <p>Ogun State, Nigeria</p>
          <p>
            <span className="bold">Email:</span>Rajkumar@trendypack.co
          </p>
          <p>info@trendypack.co</p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4>Products</h4>
          <p>Tapes</p>
          <p>Cloth</p>
          <p>Markers</p>
          <p>PU tube for Airshaft</p>
          <p>Air Shift Valve</p>
          <p>Adhesive Hose pipe </p>
          <p>Nord Gear Box Coupling</p>
          <p>NRV Valve (Nuematic Actuator )</p>
          <p>Blade</p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4>{""}</h4>
          <p>Adhesive mixing Head </p>
          <p>Static Mixer for adhesive </p>
          <p>Adhesive mixer holder </p>
          <p>Teflon Dam</p>
          <p>Barcode rod </p>
          <p>Barcode Pad </p>
          <p>Adhesive filter</p>
          <p>Magnatic Powder for Break </p>
          <p>Micrometer Mitutoyo</p>
          <p>GSM template</p>
        </Col>
      </Row>
     </Container>
     <Container fluid className="copyright-band">
      <Stack direction="horizontal">
        <Container className="footer-logo">
           <img
            alt="Trendy Pack Nigeria Ltd."
            src="/images/TP.png"
            className="d-inline-block align-top logo "
          />{" "}
          <p>Copyright © 2025 TrendyPack | Develop by Shubhi Pradhan</p>
        </Container>
      </Stack>
     </Container>
    </Container>
  );
};

export default Footer;
