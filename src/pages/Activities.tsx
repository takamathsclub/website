import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCalendarCheck, FaChalkboardTeacher } from 'react-icons/fa';
import '../styles/Activities.css';

const activitiesList = [
  {
    title: 'Présentation officielle du club',
    date: '14 Août 2025',
    description: 'Par le Comité TakaMaths.',
    bgImage: 'https://placehold.co/1920x1080/2c3e50/ecf0f1?text=Fractal+Geometry',
    icon: FaChalkboardTeacher
  },
  {
    title: 'Atelier : "Algèbre linéaire visuelle"',
    date: '16 Août 2025',
    description: 'Par le Comité TakaMaths.',
    bgImage: 'https://placehold.co/1920x1080/2980b9/ecf0f1?text=Neural+Network',
    icon: FaChalkboardTeacher
  },
  {
    title: 'Atelier: Algorithme',
    date: '23 Août 2025',
    description: 'Par le Comité TakaMaths.',
    bgImage: 'https://placehold.co/1920x1080/e74c3c/ecf0f1?text=Mathematical+Formulas',
    icon: FaChalkboardTeacher
  },
  // Ajoutez d'autres activités ici
];

const Activities: React.FC = () => {

  return (
    <div className="activities-container">
      <div className="activities-hero">
        <h1>Nos Activités Passées et Futures</h1>
        <p>Découvrez les événements, ateliers et projets que nous organisons pour la communauté TakaMaths.</p>
      </div>
      <ul className="activities-list">
        {activitiesList.map((activity, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="activity-item"
          >
            <div className="activity-item-content">
              <div className="activity-header">
                {activity.icon && <activity.icon className="activity-icon" />}
                <div className="activity-title-wrapper">
                  <h2>{activity.title}</h2>
                  <p><strong><FaCalendarCheck /> Date :</strong> {activity.date}</p>
                </div>
              </div>
              <p className="activity-description">{activity.description}</p>
            </div>
            <div className="parallax-background" style={{ backgroundImage: `url(${activity.bgImage})` }}></div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;

