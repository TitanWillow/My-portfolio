import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import devta from "../assets/img/devta.webp";
import cryptometrix from "../assets/img/cryptometrix.webp";
import dealpredator from "../assets/img/dealpredator.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Deal Predator",
      description: "Deal Predator is a customizable price tracker that allows users to set target prices and receive notifications via Telegram.",
      imgUrl: dealpredator,
      githubLink: "https://github.com/TitanWillow/Deal-Predator",
      //previewLink: "https://yourprojectdemo.com"
    },
    {
      title: "Devta",
      description: "An open-source developer toolkit offering a unified platform for everyday tasks like format conversion, hashing, minification, and time manipulation.",
      imgUrl: devta,
      githubLink : "https://github.com/techrail/devta"
    },
    {
      title: "CryptoMetrix",
      description: "Shows indepth metrices about crypto currencies in market not available on other popular platforms like hourly volumetric analysis, hourly price change history and a lot more.",
      imgUrl: cryptometrix,
      githubLink : "https://github.com/TitanWillow/Crypto-Metrix"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={""}>
                <h2>Projects</h2>
                <p id="project-para">Here are some side projects and open-source contributions I've worked on. Hover for more details</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__pulse": ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center md-q">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='pink background'></img>
    </section>
  )
}
