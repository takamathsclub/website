import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaLink, FaMoneyBillWave } from 'react-icons/fa';
import '../styles/Registration.css';

const Registration: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="registration-container">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        S'inscrire au club TakaMaths
      </motion.h1>

      <motion.section
        className="methods-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Choisissez votre méthode d'inscription</h2>
        <div className="registration-methods">
          <motion.div 
            className="method-card" 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserPlus size={50} />
            <h3>1. Inscription en personne</h3>
            <p>Rendez-vous auprès du staff du club pour vous inscrire et remplir le formulaire.</p>
          </motion.div>
          <motion.div 
            className="method-card" 
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLink size={50} />
            <h3>2. Inscription en ligne</h3>
            <p>Utilisez le lien ci-dessous pour vous inscrire via le site externe.</p>
            <motion.a 
              href="https://forms.google.com/d/e/1234567890/viewform"
              target="_blank" 
              rel="noopener noreferrer"
              className="online-reg-button"
            >
              Lien d'inscription
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="tutorial-section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2>Tutoriel de paiement Mvola</h2>
        <div className="mvola-steps">
          <motion.div className="step" whileHover={{ scale: 1.03 }} variants={cardVariants}>
            <div className="step-number">1</div>
            <p>Transférez <strong>3000 Ar</strong> au numéro du club (ex: `034 00 000 00`).</p>
          </motion.div>
          <motion.div className="step" whileHover={{ scale: 1.03 }} variants={cardVariants}>
            <div className="step-number">2</div>
            <p>Conservez la référence de la transaction (ex: `12345ABC`).</p>
          </motion.div>
          <motion.div className="step" whileHover={{ scale: 1.03 }} variants={cardVariants}>
            <div className="step-number">3</div>
            <p>Mentionnez cette référence et votre numéro d'expéditeur lors de votre inscription.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Registration;

