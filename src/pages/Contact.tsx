import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'un envoi de formulaire
    console.log('Form data submitted:', formData);
    alert('Message envoyé ! (Fonctionnalité simulée, vérifiez la console)');
    setFormData({ name: '', email: '', message: '' });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="contact-container">
      <motion.h1 initial="hidden" animate="visible" variants={itemVariants}>
        Nous contacter
      </motion.h1>
      <div className="contact-grid">
        <motion.div 
          className="contact-info-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
          }}
        >
          <motion.div className="contact-card" variants={itemVariants}>
            <FaMapMarkerAlt size={30} className="icon" />
            <p><strong>Adresse:</strong> Université de Fianarantsoa, Faculté des Sciences.</p>
          </motion.div>
          <motion.div className="contact-card" variants={itemVariants}>
            <FaEnvelope size={30} className="icon" />
            <p><strong>Email:</strong> takamathsclub@gmail.com</p>
          </motion.div>
          <motion.div className="contact-card" variants={itemVariants}>
            <FaPhone size={30} className="icon" />
            <p><strong>Téléphone:</strong> +261 3* 00 000 00</p>
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants}>
            <motion.a taget="_blank" href="https://www.facebook.com/profile.php?id=61578556116406" whileHover={{ scale: 1.2 }}><FaFacebook size={30} /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaTwitter size={30} /></motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}><FaInstagram size={30} /></motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Envoyez-nous un message</h2>
            <input 
              type="text" 
              name="name"
              placeholder="Votre Nom" 
              value={formData.name}
              onChange={handleChange}
              required 
              disabled
            />
            <input 
              type="email" 
              name="email"
              placeholder="Votre Email" 
              value={formData.email}
              onChange={handleChange}
              required
              disabled 
            />
            <textarea 
              name="message"
              placeholder="Votre message..." 
              value={formData.message}
              onChange={handleChange}
              required
              disabled
            ></textarea>
            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              disabled
            >
              Envoyer
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
