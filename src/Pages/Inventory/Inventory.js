import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const {itemId} = useParams();
    const [items, setItems] = useState({});
    const [quantity, setQuantity] = useState();
    

    useEffect( () => {

        const url = `http://localhost:5000/product/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [quantity]);

    const handleDelivered = () => {
        let quantity = items.quantity - 1;

        const updateQuantity = {quantity};
        
        const url = `http://localhost:5000/product/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => setQuantity(data))
        
    }

    const handleSubmit = event => {
        event.preventDefault();
        const value = parseInt(event.target.number.value);
        let quantity = items.quantity + value;

        const updateQuantity = {quantity};
        
        const url = `http://localhost:5000/product/${itemId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res => res.json())
        .then(data => {
            setQuantity(data);
            event.target.reset();
        })
    }

    return (
        <div className='container' style={{minHeight: "79vh"}}>
            <h3 className='text-center text-primary mt-2 mb-5'>Inventory Item Details</h3>
            <div className='inventory-details border w-50 mx-auto shadow p-3'>
                <div className='p-1'>
                    <img className='rounded img-fluid' src={items.img} alt="" />
                    <p className='mt-3'>Product Id: {itemId}</p>
                </div>
                <div className='ms-2'>
                    <h5 className='text-danger'>{items.name}</h5>
                    <p className='text-secondary'>{items.description}</p>
                    <h6 className='text-info'>Price: {items.price}</h6>
                    <p>Supplier: {items.supplier}</p>
                    <h6 className='text-info'>Quantity: {items.quantity}</h6>
                    <button onClick={handleDelivered} className='btn btn-primary'>Delivered</button>
                    <form onSubmit={handleSubmit}>
                        <h6 className='mt-2'>Restock the items</h6>
                        <input type="number" name="number" placeholder='Enter items quantity' className='me-2' />
                        <input className='btn btn-primary' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inventory;