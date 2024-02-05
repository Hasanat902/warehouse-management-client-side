import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `https://warehouse-management-server-side-ofk9.onrender.com/myItems?email=${email}`;
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `https://warehouse-management-server-side-ofk9.onrender.com/myItems/${id}`;
      fetch(url, {
        method: "Delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((product) => product._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className="container" style={{ height: "79vh" }}>
      <h2 className="text-center text-primary mt-3">My Items</h2>
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
        {items.map((item) => (
          <tbody key={item._id}>
            <tr>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier}</td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
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

export default MyItems;
