import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './HeroComponent.css';

const HeroComponent = ({img, imgAlt, heading, subheading, className}) => {
  return (
    <Container fluid className='hero-band'>
       <Container className={className}>
         <Row>
           <Col xs={12} sm={12} md={6} lg={6} className='imgSec'>
                <img alt={imgAlt} src={img} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className='textSec'>
                <h3>{heading}</h3>
                <h4>{subheading}</h4>
            </Col>
        </Row>
       </Container>
    </Container>
  )
}

export default HeroComponent