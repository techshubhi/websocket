// 'use client';
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import LeftSection from "@/components/Section/LeftSection";
import { Container } from "react-bootstrap";

export default function Contact() {
  return (
    <Container fluid>
      <HeroComponent img='images/contact.png' className='contact-hero-image' imgAlt='trendy pack contact' heading='Trendy Pack Nigeria Ltd.' subheading='Contact Us to order' />
      <LeftSection imgSrc="images/team.png" altText='Trendy Pack Nigeria Ltd.' heading='Contact us' para='De real House, 4/5, Irewole Estate, off Idiroko Road, Sango Ota, Ogun State, Nigeria' buttonHref="/about" buttonText='Know More' />
    </Container>
  );
}
