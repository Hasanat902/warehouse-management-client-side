import React from 'react';
import './Brands.css';
import bmw from '../../../images/logo/bmw.png';
import landrover from '../../../images/logo/landrover.png';
import audi from '../../../images/logo/audi.png';
import toyota from '../../../images/logo/toyota.png';
import mercedes from '../../../images/logo/mercedes.png';
import porsche from '../../../images/logo/porsche.png';


const Brands = () => {

    const brands = [
        {
            id: 1,
            img: bmw,
            name: "BMW"
        },
        {
            id: 2,
            img: audi,
            name: "AUDI"
        },
        {
            id: 3,
            img: landrover,
            name: "LandRover"
        },
        {
            id: 4,
            img: toyota,
            name: "Toyota"
        },
        {
            id: 5,
            img: mercedes,
            name: "Mercedes"
        },
        {
            id: 6,
            img: porsche,
            name: "Porsche"
        }
    ]

    return (
        <div className='container'>
            <h2 className="text-center fw-bold my-5 text-dark">Car Brands</h2>
            <div className='car-brand'>
                {
                    brands.map(brand => <div key={brand.id}>
                        <img src={brand.img} alt="" />
                        <h4>{brand.name}</h4>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Brands;