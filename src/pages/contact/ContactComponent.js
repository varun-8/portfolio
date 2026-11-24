import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StatusCard from "../../components/statusCard/StatusCard";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import {
  greeting,
  contactPageData,
  socialMediaLinks,
} from "../../portfolio.js";
import emailjs from "@emailjs/browser";

const ContactData = contactPageData.contactSection;
const EMAIL = socialMediaLinks.gmail; // varunsiva88@gmail.com

// Builds a mailto: link with the form contents pre-filled
function buildMailto({ name, email, message }) {
  const subject = name ? `Portfolio enquiry from ${name}` : "Portfolio enquiry";
  const signature = [name, email].filter(Boolean).join(" · ");
  const body = [message, signature && `\n— ${signature}`]
    .filter(Boolean)
    .join("\n");
  return `mailto:${EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

// Quick-contact rows shown in the profile card
const contactItems = [
  EMAIL && {
    icon: "fas fa-envelope",
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    copy: EMAIL,
  },
  socialMediaLinks.linkedin && {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
    value: "Connect with me",
    href: socialMediaLinks.linkedin,
  },
  socialMediaLinks.github && {
    icon: "fab fa-github",
    label: "GitHub",
    value: "See my code",
    href: socialMediaLinks.github,
  },
].filter(Boolean);

function Contact(props) {
  const theme = props.theme;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", text: "" });
  const [copied, setCopied] = useState(false);

  const copyEmail = (value) => {
    const done = () => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    };
    // fallback for older browsers or when the Clipboard API is refused
    const legacyCopy = () => {
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      try {
        if (document.execCommand("copy")) done();
      } catch (e) {}
      document.body.removeChild(el);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, legacyCopy);
    } else {
      legacyCopy();
    }
  };

  // Opens the visitor's own email app with the message filled in
  const sendViaEmailApp = () => {
    window.location.href = buildMailto(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ state: "sending", text: "Sending..." });

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
        () => {
          setStatus({
            state: "success",
            text: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus({ state: "idle", text: "" }), 4000);
        },
        (error) => {
          setStatus({
            state: "error",
            text:
              "Failed to send message. Please try again or email me directly.",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  const sending = status.state === "sending";

  return (
    <div className="contact-main page-transition">
      <Header theme={theme} setTheme={props.setTheme} />

      <div className="contact-wrap">
        <Fade bottom duration={900} distance="24px">
          <div className="contact-intro">
            <span className="contact-eyebrow">Get in touch</span>
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              {ContactData["title"]}
            </h1>
            <p className="contact-header-detail-text">
              {ContactData["description"]}
            </p>
          </div>
        </Fade>

        {greeting.status && (
          <Fade bottom duration={900} distance="20px" delay={150}>
            <div className="contact-status">
              <StatusCard
                status={greeting.status}
                variant="strip"
                extra={
                  ContactData.reply_time
                    ? [{ icon: "far fa-clock", text: ContactData.reply_time }]
                    : []
                }
              />
            </div>
          </Fade>
        )}

        <div className="contact-grid">
          {/* Profile / quick-contact card */}
          <Fade left duration={1000} distance="30px">
            <aside className="contact-card contact-profile">
              <div className="profile-pic-wrap">
                <img
                  className="profile-pic"
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt={greeting.full_name}
                />
              </div>
              <h2 className="profile-name">{greeting.full_name}</h2>
              <p className="profile-role">{greeting.subTitle}</p>

              <ul className="contact-list">
                {contactItems.map((item) => (
                  <li key={item.label} className="contact-list-item">
                    <a
                      className={`contact-item${item.copy ? " has-copy" : ""}`}
                      href={item.href}
                      {...(item.href.startsWith("mailto:")
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      <span className="contact-item-icon">
                        <i className={item.icon} aria-hidden="true"></i>
                      </span>
                      <span className="contact-item-text">
                        <span className="contact-item-label">{item.label}</span>
                        <span className="contact-item-value">{item.value}</span>
                      </span>
                      {!item.copy && (
                        <span className="contact-item-arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                    </a>
                    {item.copy && (
                      <button
                        type="button"
                        className={`contact-copy${copied ? " copied" : ""}`}
                        onClick={() => copyEmail(item.copy)}
                        aria-label={
                          copied ? "Email copied" : "Copy email address"
                        }
                        title={copied ? "Copied!" : "Copy email"}
                      >
                        <i
                          className={copied ? "fas fa-check" : "far fa-copy"}
                          aria-hidden="true"
                        ></i>
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              <a
                className="button btn-primary contact-resume-btn"
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt" aria-hidden="true"></i>
                See my Resume
              </a>

              <div className="contact-social">
                <SocialMedia />
              </div>
            </aside>
          </Fade>

          {/* Message form */}
          <Fade right duration={1000} distance="30px">
            <section className="contact-card contact-form-card">
              <h2 className="form-title">Send a Message</h2>
              <p className="form-subtitle">
                Fill in the form, or email me directly at{" "}
                <a className="form-email-link" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                .
              </p>

              <form onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field form-field-grow">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me a little about what you have in mind..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="submit"
                    className="button btn-primary contact-submit"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Send Message"}
                    {!sending && <span className="btn-arrow">→</span>}
                  </button>
                  <button
                    type="button"
                    className="button btn-outline contact-mailto"
                    onClick={sendViaEmailApp}
                  >
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    Send via Email
                  </button>
                </div>
                <p className="form-hint">
                  "Send via Email" opens your own email app with this message
                  filled in, addressed to {EMAIL}.
                </p>

                {status.text && status.state !== "sending" && (
                  <p className={`form-status ${status.state}`} role="status">
                    {status.text}
                  </p>
                )}
              </form>
            </section>
          </Fade>
        </div>
      </div>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
