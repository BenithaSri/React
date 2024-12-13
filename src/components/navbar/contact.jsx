import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      to_name: "Benitha",
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
    };

    emailjs
      .send(
        "service_rqemqgl",
        "template_i79wahg",
        templateParams,
        "oUip9VKxXO6Yxyd-D"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFeedbackMessage("Your message has been sent successfully!");
          setFormState({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setFeedbackMessage(
            "Failed to send your message. Please try again later."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-h1">Contact</h1>
        <p>
          I'm currently available to take on new projects, so feel free to send
          me a message about anything that you want me to work on. You can
          contact me anytime.
        </p>
        <br />
        <ul>
          <li>
            <MdEmail className="icon" />:{" "}
            <a href="mailto:panchagirib@gmail.com">panchagirib@gmail.com</a>
          </li>
          <li>
            <FaLinkedin className="icon" />:{" "}
            <a
              href="https://www.linkedin.com/in/benitha-panchagiri-a4a915261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            <FaGithub className="icon" />:{" "}
            <a
              href="https://github.com/BenithaSri"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
        <br />
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formState.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <br />
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
          {feedbackMessage && <p>{feedbackMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
