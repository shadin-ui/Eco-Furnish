import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faTree, faRocket, faAward, faLightbulb, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import Features from '../../Home/Feature/Features';
import Footer from '../../Footer/Footer';

const About = () => {
  return (
    
    <div className="about-page">
      <h1>About Us</h1>
      <p>Welcome to EcoFurnish, where innovation meets sustainability. We are committed to designing and creating furniture that blends modern aesthetics with environmental responsibility.</p>
      
      <div className="about-section">
        <FontAwesomeIcon icon={faTree} className="about-icon" /> {/* Correct FontAwesome icon usage */}
        <h2>The EcoFurnish Story</h2>
        <p>Our journey began with a single goal: to bring eco-friendly furniture to homes around the world. EcoFurnish was founded to craft sustainable furniture while maintaining high-quality designs that suit modern living spaces.</p>
      </div>

      <div className="about-section">
        <FontAwesomeIcon icon={faRocket} className="about-icon" />
        <h2>From Humble Beginnings</h2>
        <p>What started as a small family workshop has now grown into a renowned global brand. Our deep passion for furniture craftsmanship and environmental sustainability helped us grow from our humble roots into a leader in the furniture industry.</p>
      </div>

      <div className="about-section">
        <FontAwesomeIcon icon={faAward} className="about-icon" />
        <h2>Milestones and Achievements</h2>
        <p>Over the years, EcoFurnish has earned multiple accolades for its unique designs and sustainability initiatives. From launching our first eco-friendly furniture line to expanding into international markets, our milestones reflect our dedication to excellence.</p>
      </div>

      <div className="about-section">
        <FontAwesomeIcon icon={faLightbulb} className="about-icon" />
        <h2>Innovation and Growth</h2>
        <p>We constantly innovate to deliver top-notch designs with the smallest environmental footprint. Our research and development team continuously pushes the boundaries of what’s possible, using new materials and cutting-edge techniques to create sustainable yet stylish products.</p>
      </div>

      <div className="about-section">
        <FontAwesomeIcon icon={faGlobe} className="about-icon" />
        <h2>Our Global Reach</h2>
        <p>EcoFurnish has reached homes across the globe. We are proud to bring eco-friendly furniture to households in various countries, impacting lives while promoting a greener planet.</p>
      </div>
      <Features />
      <Footer />
      
    </div>
  );
};

export default About;
