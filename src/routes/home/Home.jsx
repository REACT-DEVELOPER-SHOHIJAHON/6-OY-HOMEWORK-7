import React, { useEffect, useState } from 'react';
import "./Home.css";
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("products")
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Mahsulotlarni olishda xatolik yuz berdi:", error);
        setError("Mahsulotlar yuklanmadi");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-message">Loading</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section className='home-section'>
      <div className="home-container">
        <div className="home-wrapper">
          <Nav/>
          <div className="product-cards">
            {products.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-link">
                <div className='product-card'>
                  <div className='product-image'>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className='product-info'>
                    <h2>{product.title.slice(0, 16)}...</h2>
                    <p>{product.description.slice(0, 30)}...</p>
                    <div className="product-price">${product.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
