import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Brands></Brands>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;