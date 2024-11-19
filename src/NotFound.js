import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function NotFound() {
  const { theme } = useContext(ThemeContext);

return (
  <div className={`min-vh-100 bg-${theme} ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-1 text-danger">404</h1>
          <p className="h4 text-muted">Page Not Found</p>
          <p className="lead">Sorry, the page you are looking for does not exist.</p>
          <Link className="btn btn-primary" to="/">Go to Home</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default NotFound;