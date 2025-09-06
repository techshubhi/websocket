// 'use client';
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import LeftSection from "@/components/Section/LeftSection";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid>
      <HeroComponent img='images/team.png' imgAlt='trendy pack' heading='Trendy Pack Nigeria Ltd.' subheading='Known in the market for superior products and services.' />
      <LeftSection imgSrc="images/team.png" altText='Trendy Pack Nigeria Ltd.' heading='About us' para=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.' buttonHref="/about" buttonText='Know More' />
    </Container>
  );
}
