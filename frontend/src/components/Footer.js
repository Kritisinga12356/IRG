import "./Footer.css";
import { FaGraduationCap, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">
          <FaGraduationCap className="footer-icon" />
          <h2>Scholarship Finder</h2>
          <p>
            Your trusted platform to explore verified scholarships, 
            apply easily, and track opportunities across India.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/scholarships">Browse Scholarships</a>
          <a href="/apply">How It Works</a>
          <a href="/support">Help & Support</a>
          <a href="/dashboard">Admin Login</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> support@scholarshipfinder.in</p>
          <p><FaGlobe /> www.scholarshipfinder.in</p>
        </div>

      </div>

      {/* BOTTOM COPY */}
      <div className="footer-bottom">
        © 2025 Scholarship Finder | Empowering Students Across India
      </div>
      
    </footer>
  );
}

export default Footer;
