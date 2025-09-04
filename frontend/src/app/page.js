import HeroComponent from "@/components/HeroComponent";
import styles from "./page.module.css";
import { Row, Container, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroComponent
        img="/images/bopp.png"
        imgAlt="bopp tape"
        heading="High Quality Packaging Products"
        subheading="(BOPP Tapes, Adhesive Tapes, Markers & more..."
      />
      <Container fluid className="key-products-section">
        <Container>
          <Row>
            <Col>
              <h1 className="section-title section-title-center">
                <b></b>
                <span
                  className="section-title-main"
                >
                  Our Products
                </span>
                <b></b>
              </h1>
              <Row>
                <Col className="keyContainer">
                  <h4>Tapes</h4>
                  <p>(BOPP, Cork, Netto etc.)</p>
                  <div className="imgContainer">
                    <img
                      src="/images/cloth-adhesive-tape.png"
                      alt="Bopp tape"
                    />
                  </div>

                  <Button>Tapes</Button>
                </Col>
                <Col className="keyContainer">
                  <h4>Adhesive mixing Head</h4>
                  <p>(for Solvent less Machine)</p>
                  <div className="imgContainer">
                    {" "}
                    <img
                      src="/images/mixer_head.png"
                      alt="Adhesive mixing Head"
                    />
                  </div>

                  <Button>Adhesive mixing Head</Button>
                </Col>
                <Col className="keyContainer">
                  <h4>Micrometer</h4>
                  <p>(Mitutoyo)</p>
                  <div className="imgContainer py-5">
                    <img src="/images/micrometer.png" alt="Micrometer" />
                  </div>
                  <Button>Micrometer</Button>
                </Col>
                <Col className="keyContainer">
                  <h4>Blade</h4>
                  <p>(Luzt, Tiger, Doctor Blade etc.)</p>
                  <div className="imgContainer">
                    <img src="/images/luzt.png" alt="Luzt Blade" />
                  </div>
                  <Button>Tapes</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="about-home-section">
        <Container>
          <Row>
            <Col className="textSec"></Col>
            <Col className="imgSec">
              
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
