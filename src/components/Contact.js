import { Container, Row, Col, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact py-5" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={`img-fluid ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} className="text-center d-flex flex-column justify-content-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <h2 className="mb-4">Get In Touch</h2>
                  <Button
                    as="a"
                    variant="outline-light"
                    className="custom-mail-button px-5 py-3 rounded-pill"
                    id="con-button"
                    href="mailto:vishalbhowmick101@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span style={{fontSize:"20px", paddingRight:"5px"}}>📧</span>Mail Me at vishalbhowmick101@gmail.com
                  </Button>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
