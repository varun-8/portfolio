import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import emailjs from "@emailjs/browser";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_8mq0edz",
        "template_bn4pr45",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "9I5GPh77Pc3FNlZXD"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              <div className="blogsite-btn-div">
                <a {...styles} className="general-btn" href={blogSection.link}>
                  My Medium Profile
                </a>
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="message-section" style={{ padding: "2rem", textAlign: "center" }}>
            <h1 style={{ color: theme.text }}>Send a Message</h1>
            <form onSubmit={sendEmail} style={{ maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: `1px solid ${theme.secondaryText}`,
                    background: theme.body,
                    color: theme.text,
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: `1px solid ${theme.secondaryText}`,
                    background: theme.body,
                    color: theme.text,
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    border: `1px solid ${theme.secondaryText}`,
                    background: theme.body,
                    color: theme.text,
                    minHeight: "150px",
                  }}
                />
              </div>
              <button
                type="submit"
                {...styles}
                className="general-btn"
                style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
              >
                Send Message
              </button>
            </form>
            {status && (
              <p
                style={{
                  color: status.includes("success") ? "green" : "red",
                  marginTop: "1rem",
                }}
              >
                {status}
              </p>
            )}
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;