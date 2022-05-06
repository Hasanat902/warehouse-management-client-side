import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect( () => {

    fetch('http://localhost:5000/product')
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [])

  return (
    <div className="container">
      <h2 className="text-center fw-bold my-5 text-dark">Inventory Items</h2>
      <div className="products-container">
        {
          products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;
