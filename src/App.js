import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import ContactForm from './Contact';
import NotFound from './NotFound';
import Navbar from './Navbar';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Home from './Home';
const Products = React.lazy(() => import('./ProductList'));
const AboutUS = React.lazy(() => import('./About'));

function App() {
  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <Navbar />
        <React.Suspense fallback={ <div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner"></div></div>}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </React.Suspense>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
