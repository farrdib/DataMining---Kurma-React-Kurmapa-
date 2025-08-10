import React from 'react';
import './About.css';
import kurmaLogo from '../assets/images/logoabout.png';
import disyaImage from '../assets/images/disya_image.jpg'; // Import the image
import fharraImage from '../assets/images/fharra_image.jpg'; // Import the image

const About = () => {
  return (
    <div className="main-container">
      <section id="about">
        <div className="section">
          <h1 className="section-title">Tentang Kami</h1>
          <div className="profilekami">
            <div className="profiledisya">
              <img src={disyaImage} alt="Disya" className="profile-kami-image" />
              <h3>Disya Putri Nazira</h3>
              <p className="profile-description">
                Disya adalah anggota tim yang berperan dalam pembuatan Website.
              </p>
            </div>
            <div className="profilefharra">
              <img src={fharraImage} alt="Fharra" className="profile-type-image" />
              <h3>Fharra Diba Kemala</h3>
              <p className="profile-description">
                Fharra adalah anggota tim yang berperan dalam pembuatan Website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-logo-section">
            <img src={kurmaLogo} alt="Kurma Logo" className="footer-logo" />
          </div>
          <div className="footer-info-section">
            <h4>Contact Us</h4>
            <p>Rumbai Pesisir</p>
            <p>Jl. Umban Sari</p>
            <p>Pekanbaru</p>
            <p>📞+6282332323345</p>
            <p>✉kurmapa@gmail.com</p>
          </div>
          <div className="footer-links-section">
            <h4>Follow Us</h4>
            <a href="https://www.facebook.com/share/htzBNKXaUpZ341mt/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://x.com/DatePalmFruit?t=4Z8muA1unFDKRJJ-e6RL6A&s=09" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/kurma_jogja?igsh=b3duaTc0ZGI1Zng3" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Kurmapa.co.id. All rights reserved.</p>
          <p>Website oleh Agensi Digital Marketing Whello</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
