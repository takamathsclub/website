import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaBrain, FaCalendarAlt, FaCode } from 'react-icons/fa';
import '../styles/Home.css';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const workshopVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Hero */}
      <motion.section 
        className="hero-section" 
        variants={itemVariants}
        initial="hidden"
        animate="visible"    
      >
          
        <div className="hero-content">
          <h1>
            Connecter <span className="highlight">la théorie</span> et la <span className="highlight">pratique</span> des maths
          </h1>
          <p>
            TakaMaths est le club interdisciplinaire de la Faculté des Sciences - Université de Fianarantsoa qui comble le fossé entre les concepts théoriques et les applications concrètes de l'informatique et des mathématiques.
          </p>
          <motion.a 
            href="/activités" 
            className="hero-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos activités
          </motion.a>
        </div>
      </motion.section>

      {/* Section des Objectifs */}
      <motion.section 
        className="objectives-section" 
        variants={itemVariants} 
        initial="hidden"
        animate="visible"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }}>
        <h2>Nos Objectifs Clés</h2>
        <div className="objectives-grid">
          <motion.div 
            className="objective-card" 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            variants={workshopVariants}
          >
            <FaLaptopCode className="objective-icon" />
            <h3>Algorithmique & Programmation</h3>
            <p>
              Dispenser des formations pratiques en résolution de problèmes et modélisation.
            </p>
          </motion.div>
          <motion.div 
            className="objective-card" 
            whileHover={{ y: -10 }} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            variants={workshopVariants}
          >
            <FaChartLine className="objective-icon" />
            <h3>Statistiques & Analyse de données</h3>
            <p>
              Maîtriser les outils comme R et Python pour l'inférence statistique.
            </p>
          </motion.div>
          <motion.div 
            className="objective-card" 
            whileHover={{ y: -10 }} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            variants={workshopVariants}
          >
            <FaBrain className="objective-icon" />
            <h3>IA & Apprentissage</h3>
            <p>
              Transposer les concepts d'algèbre linéaire dans des applications d'intelligence artificielle.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section des Ateliers */}
      <motion.section 
        className="workshops-section" 
        variants={itemVariants} 
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }}>
        <h2>Prochains Ateliers</h2>
        <div className="workshops-grid">
          <motion.div 
            className="workshop-card" 
            whileHover={{ scale: 1.05 }} 
            variants={workshopVariants}
          >
            <div className="icon-wrapper"><FaCalendarAlt /></div>
            <div className="workshop-content">
              <h3>Présentation officielle du club</h3>
              <p><strong>Date:</strong> 14 Août 2025</p>
            </div>
          </motion.div>
          <motion.div 
            className="workshop-card" 
            whileHover={{ scale: 1.05 }} 
            variants={workshopVariants}
          >
            <div className="icon-wrapper"><FaCode /></div>
            <div className="workshop-content">
              <h3>Atelier : "Algèbre linéaire visuelle"</h3>
              <p><strong>Date:</strong> 16 Août 2025</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;

