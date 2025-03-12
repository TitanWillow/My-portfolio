import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Backend Developer", "UI/UX Designer" ];
  const period = 2500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const smoothScroll = () => {
    const target = document.getElementById('connect');
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const duration = 800; // Duration in milliseconds (adjust for desired smoothness)
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1

        window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }
  const tick = () => {
    let i = loopNum % toRotate.length;  // Correctly cycles through the text array
    let fullText = toRotate[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);   // Start deleting after typing completes
        setDelta(period);      // Pause before deleting
    } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);  // Reset to typing mode
        setLoopNum(loopNum + 1);  // Rotate to the next text
        setDelta(200);         // Slight pause before typing starts again
    } else if (isDeleting) {
        setDelta(150);         // Controlled deletion speed
    } else {
        setDelta(175);         // Standard typing speed
    }
};



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={ ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Vishal`}<br/> <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Full Stack Developer", "Backend Developer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm a full-stack developer with a passion for building scalable applications and delivering seamless user experiences. Driven by curiosity and a love for problem-solving, I’m always eager to learn, grow, and contribute to impactful projects.</p>
                  <button  onClick={() => {smoothScroll()}}>Say Hello <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={ ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
