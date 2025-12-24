import "../styles/Skills.css";

// ICON IMPORTS

import cpp from "../assets/skills/cpp.jpg";
import python from "../assets/skills/python.jpg";
import js from "../assets/skills/javascript.jpg";
import react from "../assets/skills/Reactjs.png";
import node from "../assets/skills/Nodejs.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import mysql from "../assets/skills/mysql.png";
import mongo from "../assets/skills/Mongodb.png";
import sqlite from "../assets/skills/sqlite3.jpg";
import eth from "../assets/skills/Ethereum.png";
import solidity from "../assets/skills/solidity.jpg";
import ML from "../assets/skills/ML.jpg";
import DL from "../assets/skills/DL.jpg";
import GenAI from "../assets/skills/GenerativeAI.jpg";
import Agentic from "../assets/skills/Agentic.jpg";
import LLD from "../assets/skills/LLD.png";
import HLD from "../assets/skills/HLD.png";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C / C++", icon: cpp },
      { name: "Python", icon: python },
      { name: "JavaScript", icon: js },
      { name: "Solidity", icon: solidity },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: react },
      { name: "Node.js", icon: node },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: mysql },
      { name: "MongoDB", icon: mongo },
      { name: "SQLite3", icon: sqlite },
    ],
  },
  {
    title: "Blockchain",
    skills: [
      { name: "Ethereum", icon: eth },
      { name: "Solidity", icon: solidity },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", icon: ML },
      { name: "Deep Learning", icon: DL },
      { name: "Generative AI", icon: GenAI},
      { name: "Agentic AI", icon: Agentic },
    ],
  },
  {
    title: "System Design",
    skills: [
      { name: "HLD", icon: HLD },
      { name: "LLD", icon: LLD },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>
      <span className="underline"></span>

      {skillGroups.map((group, idx) => (
        <div className="skill-group" key={idx}>
          <h3 className="group-title">{group.title}</h3>

          <div className="skills-grid">
            {group.skills.map((skill, i) => (
              <div className="skill-card" key={i}>
                <img src={skill.icon} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
