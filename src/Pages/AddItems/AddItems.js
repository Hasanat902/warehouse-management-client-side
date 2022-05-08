import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    const url = `https://floating-tor-93105.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("Item added successfully");
        e.target.reset();
      });
  };

  return (
    <div className="w-50 mx-auto" style={{ height: "79vh" }}>
      <h2 className="text-center text-primary mt-3">Add Some Items</h2>
      <form
        className="d-flex flex-column mt-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="mb-3"
          placeholder="Your Email"
          {...register("email")}
          required
        />
        <input className="mb-3" placeholder="Item Name" {...register("name")} />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input className="mb-3" placeholder="Price" {...register("price")} />
        <input
          className="mb-3"
          placeholder="Supplier"
          {...register("supplier")}
        />
        <input className="mb-3" placeholder="Photo URL" {...register("img")} />
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="btn btn-primary w-50 mx-auto d-block"
          type="submit"
          value="Add Items"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
