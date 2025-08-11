import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  title: string;
  children: ReactNode;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ title, children }) => {
  return (
    <motion.section
      className="animated-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
