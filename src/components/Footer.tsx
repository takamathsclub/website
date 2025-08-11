import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>TakaMaths</h3>
          <p>
            Un pont entre la théorie et la pratique des mathématiques à l'Université de Fianarantsoa.
          </p>
        </div>
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/activities">Activités</a></li>
            <li><a href="/registration">Inscription</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact & Réseaux</h3>
          <p><FaEnvelope /> takamaths@gmail.com</p>
          <div className="social-icons">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61578556116406"><FaFacebook size={24} /></a>
            <a href="#"><FaTwitter size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TakaMaths. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
