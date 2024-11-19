import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Product Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch ms-auto">
          <input className="form-check-input" type="checkbox" id="themeToggle" checked={theme === 'dark'} onChange={toggleTheme} />
          <label className={`form-check-label ${theme === 'dark' ? 'text-light' : 'text-dark'}`} htmlFor="themeToggle">
            {theme === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
