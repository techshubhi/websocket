import HeroComponent from '@/components/HeroComponent/HeroComponent'
import React from 'react'
import { Container } from 'react-bootstrap'

const Tapepage = () => {
  return (
   <Container fluid>
    <HeroComponent
     img="/images/netoo.png"
        imgAlt="netto tape trendy pack nigeria ltd."
        heading="Adhesive Tape"
        subheading="Adhesive Tapes can be made of different material like paper , plastic films & cloth in different microne of different sizes."
    />
    
   </Container>
  )
}

export default Tapepage