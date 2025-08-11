import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/NotFound.css';

const NotFound: React.FC = () => {
  return (
    <motion.div
      className="not-found-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaExclamationTriangle className="not-found-icon" />
      <h1>404</h1>
      <p>Oups ! La page que vous recherchez n'existe pas.</p>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link to="/" className="back-home-button">Retourner à l'accueil</Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
