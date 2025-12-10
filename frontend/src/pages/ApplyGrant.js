import React from "react";
import "./ApplyGrant.css";

export default function ApplyGrant() {
  return (
    <div className="about-wrapper">

      {/* HERO SECTION */}
      <section className="about-bg">
  <div className="about-hero">
    <h1>About Scholarship Finder</h1>
    <p className="hero-subtitle">
      India’s Most Trusted Platform for Scholarships, Research Grants & Education Support.
    </p>
  </div>

  {/* INTRO SECTION */}
  <section className="about-section">
    <h2>Who We Are</h2>
    <p>
      Scholarship Finder is a dedicated initiative designed to help students across India access 
      genuine and verified scholarships, research grants, and financial assistance schemes.
      Our platform connects students with opportunities that match their academic level, 
      background, and achievements.
    </p>
  </section>
</section>

      {/* MISSION & VISION */}
      <section className="mission-vision">
        <div className="mv-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To empower Indian students by ensuring equal access to financial support, 
            enabling them to pursue education without barriers.
          </p>
        </div>

        <div className="mv-card">
          <h3>🌍 Our Vision</h3>
          <p>
            Creating a future where every student can achieve their dreams, regardless of 
            financial background.
          </p>
        </div>

        <div className="mv-card">
          <h3>🎯 Our Mission</h3>
          <p>
            To empower Indian students by ensuring equal access to financial support, 
            enabling them to pursue education without barriers.
          </p>
        </div>

        <div className="mv-card">
          <h3>🌍 Our Vision</h3>
          <p>
            Creating a future where every student can achieve their dreams, regardless of 
            financial background.
          </p>
        </div>

        
      </section>
      

      <hr></hr>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <h2>How Scholarship Finder Works?</h2>

        <div className="how-steps">
          <div className="step-card">
            <span>1️⃣</span>
            <h4>Search Scholarships</h4>
            <p>Select from thousands of verified scholarship listings.</p>
          </div>

          <div className="step-card">
            <span>2️⃣</span>
            <h4>Check Eligibility</h4>
            <p>Compare requirements and find the best match for you.</p>
          </div>

          <div className="step-card">
            <span>3️⃣</span>
            <h4>Apply Easily</h4>
            <p>Use official application links and instructions provided.</p>
          </div>

          <div className="step-card">
            <span>4️⃣</span>
            <h4>Get Support</h4>
            <p>Need help? Contact our support team anytime.</p>
          </div>

        <div className="step-card">
            <span>3️⃣</span>
            <h4>Apply Easily</h4>
            <p>Use official application links and instructions provided.</p>
          </div>


        </div>
      </section>

    </div>
  );
}
