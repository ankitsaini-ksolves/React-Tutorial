import React from 'react';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`min-vh-100 bg-${theme} ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
    <div className="p-4">
      <h2>About Us</h2>
        <div>
          <p>
            Welcome to <strong>Product Store</strong>, your trusted destination for the finest selection of
            products to meet all your needs. We take pride in delivering quality and value through our
            carefully curated catalog. Our goal is to provide an unparalleled shopping experience, driven
            by customer satisfaction and innovation.
          </p>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

