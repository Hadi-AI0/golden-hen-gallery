import React from 'react';
import './Logos.css';

const logos = [
  { name: 'Maiz', src: '/logos/Maiz.jpeg' },
  { name: 'Shawarmat', src: '/logos/Shawarmat.jpeg' },
  { name: 'UFO Burger', src: '/logos/UFO-Burger.jpeg' },
  { name: 'Alforsan restaurant', src: '/logos/Al-Forsan.jpeg' },
  { name: 'Mishwar', src: '/logos/mishwar.logo.svg' },
  { name: 'Biryani Althawaqa', src: '/logos/biryani-logo.svg' },
  { name: 'Aloha', src: '/logos/aloha-logo.svg' },
  { name: 'Muqammar', src: '/logos/muqammar-logo.svg' },
  { name: 'Rayg', src: '/logos/rayg-logo.svg' },
  { name: 'Burgerito', src: '/logos/burgerito-logo.svg' },
  { name: 'AL-Bashwat', src: '/logos/Al-Bashwat.jpeg' },
];

const Logos: React.FC = () => {
  return (
    <section className="logos-section">
      <div className="logos-carousel">
        <div className="logos-track">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="logo-item">
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`} className="logo-item">
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
