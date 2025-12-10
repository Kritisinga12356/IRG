import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="support-wrapper">
      {/* Header Section */}
      <header className="support-header">
        <h1>Scholarship Finder Support</h1>
        <p>
          We’re here to help you with any queries related to{" "}
          <b>Scholarship Finder, Eligibility, Applications & Student Support.</b>
        </p>
      </header>

      {/* Contact Options */}
      <section className="contact-grid">
        <div className="contact-card">
          <div className="icon">📧</div>
          <h3>Email Us</h3>
          <p>support@scholarshipfinder.in</p>
        </div>

        <div className="contact-card">
          <div className="icon">📞</div>
          <h3>Call Us</h3>
          <p>+91 98234 56780</p>
        </div>

        <div className="contact-card">
          <div className="icon">💬</div>
          <h3>Live Chat</h3>
          <p>Available 9 AM – 9 PM</p>
        </div>
      </section>

      {/* Toggle Button */}
      <div className="center-btn">
        <button
          className="toggle-btn"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Get Support"}
        </button>
      </div>

      {/* Feedback Form (Visible on Button Click) */}
      {showForm && (
        <section className="feedback-section show">
          <h2>Submit Your Scholarship Query</h2>
          <form className="feedback-form">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Your Message</label>
            <textarea
              placeholder="Ask about scholarships, eligibility, deadlines, or application help..."
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </section>
      )}
    </div>
  );
}
