import React from 'react';
import './Testimonial.css';

const Testimonial = ({comment}) => {

    const {img, name, identity, description} = comment;

    return (
        <div className='testimonial border shadow-lg p-3 text-center'>
            <img src={img} alt="" />
            <h5 className='text-danger'>{name}</h5>
            <p className='text-secondary'>{identity}</p>
            <p className='text-secondary'>{description}</p>
            <h3 className='fs-1'>,,</h3>
        </div>
    );
};

export default Testimonial;