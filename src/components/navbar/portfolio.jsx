import React, { useState } from "react";
import "./portfolio.css";
import html from "../../assets/html.png";
import css from "../../assets/css.jpeg";
import js from "../../assets/javas.png";
import node from "../../assets/nodejs.png";
import react from "../../assets/react.png";
import java from "../../assets/java.jpeg";
import sql from "../../assets/sql.jpeg";
import swift from "../../assets/swift.png";
import vscode from "../../assets/vscodeicon.png";
import net from "../../assets/netbeans.jpeg";
import github from "../../assets/github.png";
import mongodb from "../../assets/db.png";
import windows from "../../assets/windows.png";
import linux from "../../assets/linux.png";
import mac from "../../assets/ios.png";
import yuvaa from "../../assets/yuvaa.jpeg";
import rfc from "../../assets/rfc.jpeg";

const Portfolio = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleHover = (skill) => {
    setHoveredSkill(skill);
  };

  const handleLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div className="about-container">
    <div className="about-content">
        <h1 className="about-h1">Skills and More!</h1>

        <div className="section">
          <h2>Skills</h2>
          <ul>
            <li>
              <h3>Programming Languages</h3>
              <div className="programming-languages">
                <ul className="sub-list">
                  <li
                    onMouseEnter={() => handleHover("HTML")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={html} className="icon-img" alt="HTML Icon" />
                    HTML
                    {hoveredSkill === "HTML" && (
                      <div className="dialog-box">
                        <h4>HTML</h4>
                        <p>
                          Learned how to structure web pages with HTML, ensuring
                          semantic layout, and accessibility.
                        </p>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleHover("CSS")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={css} className="icon-img" alt="CSS Icon" />
                    CSS
                    {hoveredSkill === "CSS" && (
                      <div className="dialog-box">
                        <h4>CSS</h4>
                        <p>
                          Worked on styling techniques including Flexbox, Grid,
                          animations, and media queries for responsive design.
                        </p>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleHover("JavaScript")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={js} className="icon-img" alt="JavaScript Icon" />
                    JavaScript
                    {hoveredSkill === "JavaScript" && (
                      <div className="dialog-box">
                        <h4>JavaScript</h4>
                        <p>
                          Developed interactive websites using JavaScript and
                          modern ES6+ features like async/await and promises.
                        </p>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleHover("Node.js")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={node} className="icon-img" alt="Node.js Icon" />
                    Node.js
                    {hoveredSkill === "Node.js" && (
                      <div className="dialog-box">
                        <h4>Node.js</h4>
                        <p>
                          Built scalable server-side applications using Node.js
                          and Express, and integrated with MongoDB.
                        </p>
                      </div>
                    )}
                  </li>
                </ul>

                {/* Second row for the next 4 languages */}
                <ul className="sub-list">
                  <li
                    onMouseEnter={() => handleHover("Swift")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={swift} className="icon-img" alt="Swift Icon" />
                    Swift
                    {hoveredSkill === "Swift" && (
                      <div className="dialog-box">
                        <h4>Swift</h4>
                        <p>
                          Developed iOS applications using Swift and SwiftUI,
                          creating intuitive and user-friendly interfaces.
                        </p>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleHover("SQL")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={sql} className="icon-img" alt="SQL Icon" />
                    SQL
                    {hoveredSkill === "SQL" && (
                      <div className="dialog-box">
                        <h4>SQL</h4>
                        <p>
                          Proficient in writing complex SQL queries, designing
                          normalized databases, and ensuring data integrity.
                        </p>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleHover("React")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={react} className="icon-img" alt="React Icon" />
                    React
                    {hoveredSkill === "React" && (
                      <div className="dialog-box">
                        <h4>React</h4>
                        <p>
                          Developed interactive web applications with React,
                          utilizing hooks, state management, and context API.
                        </p>
                      </div>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleHover("Java")}
                    onMouseLeave={handleLeave}
                    className="skill-item">
                    <img src={java} className="icon-img" alt="Java Icon" />
                    Java
                    {hoveredSkill === "Java" && (
                      <div className="dialog-box">
                        <h4>Java</h4>
                        <p>
                          Created robust object-oriented applications and worked
                          with frameworks like Spring Boot for web services.
                        </p>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </li>

            {/* Other sections */}
            <li>
              <h3>Tools</h3>
              <ul className="sub-list">
                <li>
                  <img src={vscode} className="icon-img" alt="VS Code Icon" />
                  VS Code
                </li>
                <li>
                  <img src={net} className="icon-img" alt="NetBeans Icon" />
                  NetBeans
                </li>
                <li>
                  <img src={github} className="icon-img" alt="GitHub Icon" />
                  GitHub
                </li>
                <li>
                  <img src={mongodb} className="icon-img" alt="MongoDB Icon" />
                  MongoDB
                </li>
              </ul>
            </li>

            <li>
              <h3>Operating Systems</h3>
              <ul className="sub-list">
                <li>
                  <img src={windows} className="icon-img" alt="Windows Icon" />
                  Windows
                </li>
                <li>
                  <img src={mac} className="icon-img" alt="iOS Icon" />
                  iOS
                </li>
                <li>
                  <img src={linux} className="icon-img" alt="Linux Icon" />
                  Linux
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Certifications</h2>
          <ul>
            <li>Linux Grade A, Capgemini - 2022</li>
            <li>GxP, Capgemini-SAP - 2023</li>
            <li>Sustainability Awareness, Capgemini - 2023</li>
            <li>JavaScript, Coursera - 2023</li>
            <li>Project Management, Coursera – 2023</li>
          </ul>
        </div>

        <div className="section">
          <h2>Volunteering</h2>
          <ul>
            <li>
              <img src={yuvaa} className="icon-img" alt="Yuvaa Icon" />
              Yuvaa Volunteer for Covid
            </li>
            <li>
              <img src={rfc} className="icon-img" alt="RFC Icon" />
              RFC - Street Cause
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Portfolio;
