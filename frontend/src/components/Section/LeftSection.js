import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

const LeftSection = ({
  imgSrc,
  altText,
  heading,
  para,
  buttonHref,
  buttonText,
}) => {
  return (
     <Container fluid className="about-home-section">
      <Container>
        <Row>
          
          <Col xs={12} sm={12} md={6} lg={6} className="textSec">
            <h3 className="section-title section-title-center">
              <b></b>
              <span className="section-title-main">{heading}</span>
              <b></b>
            </h3>
            <p>{para}</p>
            <Button href={buttonHref} className="button">
              {buttonText}
            </Button>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} className="imgSec">
            <img src={imgSrc} alt={altText} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default LeftSection