import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './HeroComponent.css';

const HeroComponent = ({img, imgAlt, heading, subheading}) => {
  return (
    <Container fluid className='hero-band'>
       <Container>
         <Row>
            <Col className='imgSec'>
                <img alt={imgAlt} src={img} />
            </Col>
            <Col className='textSec'>
                <h3>{heading}</h3>
                <h4>{subheading}</h4>
            </Col>
        </Row>
       </Container>
    </Container>
  )
}

export default HeroComponent