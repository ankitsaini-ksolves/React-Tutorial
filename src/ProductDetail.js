import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { theme } = useContext(ThemeContext);


  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);   
            } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
    fetchProduct();
  }, [id]);

  if (!product) return <h2 className="text-center mt-4">Loading...</h2>;

  return (
    <div className={` p-2 bg-${theme} ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} className="img-fluid mb-3" alt={product.title} />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
    </div>
  );
};

export default ProductDetail;
