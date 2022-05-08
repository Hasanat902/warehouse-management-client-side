import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://floating-tor-93105.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center fw-bold my-5 text-dark">Inventory Items</h2>
      <div className="products-container">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <Link
        className="btn btn-primary my-5 d-block mx-auto w-25"
        to="/manageInv"
      >
        Manage Inventories
      </Link>
    </div>
  );
};

export default Products;
