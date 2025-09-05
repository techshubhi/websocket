// 'use client';
import HeroComponent from "@/components/HeroComponent";
import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container fluid>
      <HeroComponent img='images/team.png' imgAlt='trendy pack' heading='Trendy Pack Nigeria Ltd.' subheading='Known in the market for superior products and services,' />
    </Container>
  );
}
