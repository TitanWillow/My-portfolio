import { Col } from "react-bootstrap";
import { FaGithub, FaEye } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, githubLink, previewLink }) => {
  return (
    <Col size={12} sm={6} md={4} className="center" id="mdq">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx place">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
              </a>
            )}
            {previewLink && (
              <a href={previewLink} target="_blank" rel="noopener noreferrer">
                <FaEye className="icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
