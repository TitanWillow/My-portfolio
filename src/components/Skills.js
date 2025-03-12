import React from "react";
import { Container } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPython, FaGit, FaDocker, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiRedux, SiExpress, SiPostgresql, SiLinux, SiCplusplus, SiSpringboot, SiFlask, SiDjango, SiGraphql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="skill-icon" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="skill-icon" /> },
  { name: "JavaScript", icon: <SiJavascript className="skill-icon" /> },
  { name: "ReactJs", icon: <FaReact className="skill-icon" /> },
  { name: "Redux", icon: <SiRedux className="skill-icon" /> },
  { name: "Express", icon: <SiExpress className="skill-icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="skill-icon" /> },
  { name: "NodeJs", icon: <FaNodeJs className="skill-icon" /> },
  { name: "GraphQL", icon: <SiGraphql className="skill-icon" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="skill-icon" /> },
  { name: "Python", icon: <FaPython className="skill-icon" /> },
  { name: "Java", icon: <FaJava className="skill-icon" /> },
  { name: "C++", icon: <SiCplusplus className="skill-icon" /> },
  { name: "Flask", icon: <SiFlask className="skill-icon" /> },
  { name: "Django", icon: <SiDjango className="skill-icon" /> },
  { name: "SpringBoot", icon: <SiSpringboot className="skill-icon" /> },
  { name: "Docker", icon: <FaDocker className="skill-icon" /> },
  { name: "Git", icon: <FaGit className="skill-icon" /> },
  { name: "Linux", icon: <SiLinux className="skill-icon" /> },
];

export const Skills = () => {
  return (
    <Container className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">My Technical Skillset</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item icon-hover">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};
