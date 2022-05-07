import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {

    const {_id, img, name, description, price, quantity, supplier} = product;

    const navigate = useNavigate();

    const navigateInventory = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='product'>
            <img className='w-100 p-1' src={img} alt="" />
            <div className="product-details">
                <h5 className='text-danger'>{name}</h5>
                <p>{description}</p>
                <h6 className='fw-bold'>Price: {price}</h6>
                <p className='fw-bold'>Quantity: {quantity}</p>
                <p className='text-primary'>Supplier: {supplier}</p>
                <button onClick={() => navigateInventory(_id)} className='btn btn-info w-50 fw-bold'>Update</button>
            </div>
        </div>
    );
};

export default Product;