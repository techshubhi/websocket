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
                <span className="section-title-main">Our Products</span>
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
          <Button href="/about" className="button">
            Know More
          </Button>
        </Container>
      </Container>
      <Container className="about-home-section">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="imgSec">
              <img src="images/team.png" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="textSec">
              <h3 className="section-title section-title-center">
                <b></b>
                <span className="section-title-main">About us</span>
                <b></b>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
               <Button href="/about" className="button">
              Know More
            </Button>
            </Col>
           
          </Row>
        </Container>
      </Container>
      <Container fluid className="trust-section">
        <Container>
          <h2>Here's why you can trust us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Row className="inner-section">
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className="relative"></div>
              <i className="bi bi-bag-heart fs-1"></i>
              <p className="trust_image_text">100% customizable</p>
              <div className="absolute"></div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className="relative"></div>
              <i className="bi bi-hand-thumbs-up-fill fs-1"></i>
              <p className="trust_image_text">Top Quality Products</p>
              <div className="absolute"></div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className="relative"></div>
              <i className="bi bi-collection fs-1"></i>
              <p className="trust_image_text">Wide Collection</p>
              <div className="absolute"></div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <div className="relative"></div>
              <i className="bi bi-fingerprint fs-1"></i>
              <p className="trust_image_text">100% Secure Payments</p>
              <div className="absolute"></div>
            </Col>
          </Row>
          <Button href="/about" className="button">
            Know More
          </Button>
        </Container>
      </Container>
    </div>
  );
}
