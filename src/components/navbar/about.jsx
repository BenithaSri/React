import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
     

      <div className="about-container">

      <a href="../../assets/Benitha's Resume .doc" download="Benitha's Resume .doc">
            <button>Download Resume</button>
      </a>


        <div className="about-content">
          <h1 className='about-h1'>About Me!</h1>
          
          <p className='about-p'>
            Hello! I'm Benitha Sri Panchagiri, a software engineer and current
            Master’s student in Computer Science at Northwest Missouri State
            University. With a solid foundation in front-end development, cloud
            server management, and technical troubleshooting, I have gained
            hands-on experience at both Capgemini and through an internship at
            Internshala.
          </p>
          <br />
          <p className='about-p'><b>Let me walk you through my professional experience</b></p>

          <ul>
            <li className='about-li'>
              <a href="#capgemini-section">
              <p className='about-p'><b>Capgemini</b></p>
              </a>
            </li>
            <li className='about-li'>
              <a href="#internshala-section">
                <p className='about-p'><b>Internshala</b></p>
              </a>
            </li>
          </ul>
          <br />

          <h2 className="about-h2" id="capgemini-section">Capgemini</h2>
          <p className='about-p'>
            During my time at Capgemini, I gained hands-on experience in both
            cloud server management and web application development. I was
            involved in ensuring the stability of cloud systems, optimizing web
            application performance, and managing incidents efficiently. Below
            are some <b>key responsibilities</b> and tasks I handled:
            <ul>
              <li className='about-li'>
                <h3 className='about-h3' >Cloud Server Management & Incident Handling</h3>
              </li>
              <ul>
                <li className='about-li'>
                  Monitored cloud servers for performance, including CPU and
                  memory usage, using Grafana, ensuring system stability.
                </li>
                <li className='about-li'> 
                  Resolved customer incidents and system alerts related to cloud
                  servers, ensuring optimal performance.
                </li>
                <li className='about-li'>
                  Created and managed JIRA tickets for physical server repairs,
                  facilitating timely and organized maintenance.
                </li>
                <li className='about-li'>
                  Managed customer incidents in ServiceNow (SNOW), ensuring
                  issues were resolved within SLA guidelines.
                </li>
                <li className='about-li'>
                  Utilized monitoring tools like Grafana and JIRA to track system
                  performance and incidents in real-time.
                </li>
                <li className='about-li'>
                  Collaborated with the cloud support team using Slack to
                  troubleshoot and resolve server issues efficiently.
                </li>
                <li className='about-li'>
                  Ensured compliance with SLAs by monitoring incident resolution
                  times in ServiceNow, improving response efficiency.
                </li>
              </ul>
              <li className='about-li'>
                <h3 className='about-h3'>Web Application Development</h3>
              </li>
              <ul>
                <li className='about-li'>
                  Developed and maintained web applications, leading to
                  improved team performance through optimization techniques like
                  code minification and troubleshooting.
                </li>
                <li className='about-li'>
                  Enhanced application responsiveness with Bootstrap, ensuring
                  compatibility across devices.
                </li>
                <li className='about-li'>
                  Utilized REST APIs for CRUD operations, facilitating efficient
                  data flow within the application.
                </li>
                <li className='about-li'>
                  Implemented user authentication with Passport middleware,
                  securing access to the application.
                </li>
                <li className='about-li'>
                  Tested HTTP requests using Postman to ensure reliable
                  server-client interactions.
                </li>
                <li className='about-li'>
                  Executed front-end development strategies, resulting in
                  improved website performance by using browser developer tools
                  for debugging.
                </li>
              </ul>
            </ul>
          </p>
          <br />

          <h2 className="about-h2" id="internshala-section">Internshala</h2>
          <p className='about-p'>
            In my web development role, I have had the opportunity to work on a
            variety of tasks that involve the creation, maintenance, and
            optimization of web applications. My experience spans front-end
            technologies like HTML, CSS, JavaScript, and frameworks such as React
            and Bootstrap. I've also focused on ensuring the applications I work
            on are responsive, well-tested, and troubleshoot issues promptly to
            ensure optimal performance.
          </p>
          <br />

          <h3 className='about-h3'>Key Responsibilities</h3>
          <ul>
            <li className='about-li'> 
              Develop and maintain web applications using HTML, CSS, and
              JavaScript to ensure seamless user interfaces.
            </li>
            <li className='about-li'>
              Used Bootstrap to make the pages responsive, ensuring
              compatibility across different screen sizes and devices.
            </li>
            <li className='about-li'>
              Worked on creating React components using HTML and CSS for
              building interactive and dynamic user interfaces.
            </li>
            <li className='about-li'> 
              Utilized Pug to design dynamic HTML pages, making it easier to
              maintain and manage complex web structures.
            </li>
            <li className='about-li'>
              Conducted thorough testing and debugging to ensure the
              functionality and performance of web applications, optimizing the
              user experience.
            </li>
            <li className='about-li'>
              Assisted in troubleshooting technical issues and providing timely
              solutions to ensure smooth application performance.
            </li>
          </ul>
          <br />
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
