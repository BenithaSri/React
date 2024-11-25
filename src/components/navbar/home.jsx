import React from "react";
import profile from "../../assets/profile1.png";
import "./home.css";

const Home = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-h1">WELCOME!!!</h1>
        <br />
        <p className="about-p">
          Hey there! I'm Benitha Sri Panchagiri, a software engineer and a
          current Master's student in Computer Science at Northwest Missouri
          State University. With hands-on experience in both cloud server
          management and web development, I've had the chance to work with some
          amazing teams at Capgemini and Internshala. Whether it's
          troubleshooting technical issues or building responsive web apps, I'm
          always up for a new challenge. When I'm not coding, you can find me
          exploring the latest tech trends or tinkering with new ideas. Feel
          free to reach out—I’m always excited to collaborate and learn from
          others!
        </p>
        <br />
        {/* Projects Section */}
        <div>
          <h2 className="about-h2">Projects</h2>
          <p className="about-p">
            Here are some of the projects I've worked on:
          </p>
          <ul>
            <li>Project 1: Description of project 1.</li>
            <li>Project 2: Description of project 2.</li>
            <li>Project 3: Description of project 3.</li>
            {/* Add more projects as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
