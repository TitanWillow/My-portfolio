import { Container, Row, Col, Button } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import aboutImg from "../assets/img/space.webp";
import resume from "../assets/files/resume.pdf";

export const AboutMe = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resume;
        link.setAttribute("download", "Resume.pdf"); // Specify filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section className="about" id="about">
       <Container id="cont">
      <Row className="justify-content-md-center">
        <Col lg={{ span: 4 }}>
              <img
                id="about"
                
                src={aboutImg}
                alt="About Me"
              />
        </Col>

        <Col lg={{ span: 6, offset: 1 }}>
          <Row>
            <Col style={{ marginBottom : '4%'}}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <h2 className="about-t">
                    About Me
                  </h2>
                )}
              </TrackVisibility>
            </Col>
          </Row>

          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <p className={isVisible ? "animate__animated animate__fadeInUp about-p" : "about-p"}>
                    Hey there! I'm Vishal Bhowmick, a Full-Stack Software Engineer with over 2 years of experience building scalable web applications and services. I've worked extensively with technologies like Node.js, React, PostgreSQL, and AWS to create impactful solutions. Currently, I'm enhancing user experiences with React.js and crafting sleek, intuitive UI/UX designs.
When I'm not coding, you'll find me exploring finance trends or reading some interesting blogs. I believe in blending logic with creativity to bring ideas to life — both in tech and beyond!
                  </p>
                )}
              </TrackVisibility>
            </Col>
          </Row>

          <Row>
            <Col style={{ marginTop : '5%'}}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Button
                    onClick={handleDownload}
                    className={`d-flex align-items-center gap-2 btn btn-primary ${
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }`}
                  >
                    <Download size={18} /> Download CV
                  </Button>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

/* <Container>
      <Row className="justify-content-md-center">
        <Col xs={4} className="d-flex align-items-center" style={{ minHeight: '100px' }}>
          1
        </Col>
        <Col xs={4}>2</Col>
        <Col xs={4}>3</Col>
      </Row>
      <Row>
        <Col xs={4} className="d-flex align-items-center" style={{ minHeight: '100px' }}>
          </Col>
          <Col xs={6}>4</Col>
          <Col xs={6}>5</Col>
        </Row>
      </Container>*/