import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ProductList = React.memo(() => {
    const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
        try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);   
        } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
        fetchProducts();
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchValue) => {
      setSearchTerm(searchValue);
    }, 1000),
  []);

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
    debouncedSearch(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setInputValue('');
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`p-4 bg-${theme}`}>
        <div className="input-group mb-3" style={{ position: 'relative' }}>
            <input type="text" placeholder="Search for products..." className="form-control mb-3" value={inputValue} onChange={handleSearchChange} />
            {searchTerm && (
            <span onClick={handleClearSearch} className="clear-icon" >
                <i className="mdi mdi-close-circle-outline mdi-24px mdi-dark mdi-inactive"></i>
            </span>
        )}
        </div>
        <div className="row">
            {filteredProducts.map(product => (
            <div className="col-md-4 mb-4" key={product.id}>
                <div className="card">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <Link to={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
                </div>
                </div>
            </div>
            ))}
      </div>
    </div>
  );
});

export default ProductList;
