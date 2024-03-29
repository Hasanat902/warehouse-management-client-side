import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://warehouse-management-server-side-ofk9.onrender.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://warehouse-management-server-side-ofk9.onrender.com/product/${id}`;
      fetch(url, {
        method: "Delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container" style={{ minHeight: "79vh" }}>
      <h2 className="text-center text-primary mt-3">Manage Inventories</h2>
      <Link className="btn btn-info mx-right" to="/addItem">
        Add Item
      </Link>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Supplier</th>
          </tr>
        </thead>
        {products.map((product) => (
          <tbody key={product._id}>
            <tr>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.supplier}</td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageInventories;
