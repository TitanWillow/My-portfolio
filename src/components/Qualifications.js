import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import "./Qualification.css"; // Custom styles for timeline

export const Qualification = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".timeline__block");

    const handleScroll = () => {
      elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
          el.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="about-timelines" id="journey">
      <Row>
        <Col md={6} className="experience-column">
          <h2 className="text-pretitle">EXPERIENCE</h2>
          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">TA Netgables Pvt Ltd (SARALWEB)</h4>
                <h5 className="timeline__meta">Software Engineer</h5>
                <p className="timeline__timeframe">December 2022 - Present</p>
              </div>
              <div className="timeline__desc">
                <p>
                Developing and maintaining scalable web applications, implementing automated solutions for document generation, and ensuring secure, efficient deployments.<br/><br/>
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col md={6} className="education-column">
          <h2 className="text-pretitle edu-media">EDUCATION</h2>
          <div className="timeline">
            <div className="timeline__block">
              <div className="timeline__bullet"></div>
              <div className="timeline__header">
                <h4 className="timeline__title">Bhagwan Parshuram Institute Of Technology</h4>
                <h5 className="timeline__meta">Bachelor of Technology (IT)</h5>
                <p className="timeline__timeframe">August 2018 - June 2022</p>
              </div>
              <div className="timeline__desc">
                <p>
                  CGPA : 8.41<br/><br/><br/><br/>
                </p>
              </div>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  );
};
