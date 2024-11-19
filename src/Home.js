import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`min-vh-100 p-4 bg-${theme} ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
      <h2 className="text-center">Welcome to the Product Store!</h2>
    </div>
  );
};

export default Home;
