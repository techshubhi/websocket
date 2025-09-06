import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";

const KeySection = ({ heading, products, buttonText, buttonHref }) => {
  console.log("products", products);
  return (
    <Container fluid className="key-products-section">
      <Container>
        <Row>
          <Col>
            <h1 className="section-title section-title-center">
              <b></b>
              <span className="section-title-main">{heading}</span>
              <b></b>
            </h1>
            <Row>
              {products.length > 0 &&
                products.map((product, index) => (
                  <Col key={index} className="keyContainer">
                    <h4>{product.heading}</h4>
                    <p>{product.subHeading}</p>
                    <div className="imgContainer">
                      <img src={product.img} alt={product.imgAlt} />
                    </div>

                    <Button href={product.buttonHref}>
                      {product.buttonText}
                    </Button>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <Button href={buttonHref} className="button">
          {buttonText}
        </Button>
      </Container>
    </Container>
  );
};

export default KeySection;
