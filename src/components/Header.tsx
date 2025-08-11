import React from 'react';
import { Variants, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const navVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const Header: React.FC = () => {
  return (
    <motion.header
      className="header-nav"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={navItemVariants} className="logo">
        <Link to="/">TakaMaths</Link>
      </motion.div>
      <motion.ul className="nav-links">
        {['Accueil', 'Activités', 'Inscription', 'Contact'].map((item) => (
          <motion.li key={item} variants={navItemVariants} whileHover={{ scale: 1.1 }}>
            <Link to={`/${item === 'Accueil' ? '' : item.toLowerCase()}`}>{item}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  );
};

export default Header;

