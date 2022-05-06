import React from 'react';
import './Testimonials.css';
import user1 from '../../../images/customer/user1.jpg';
import user2 from '../../../images/customer/user2.jpg';
import user3 from '../../../images/customer/user3.jpg';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {

    const comments = [
        {
            id: 1,
            img: user1,
            name: "John Smith",
            identity: "Car Dealer",
            description: "This car dealer is so trusted.Their collection is so good.All latest collection is there.You can find various brands cars from here.So you doing business with them."
        },
        {
            id: 2,
            img: user2,
            name: "Steve Waugh",
            identity: "Auto Dealer",
            description: "The best car dealer site in the town.Their all products are original.So you can easily buy or doing business with them.They have so many collections.All products are good."
        },
        {
            id: 3,
            img: user3,
            name: "Ryan Smith",
            identity: "Customer",
            description: "This car dealer is so trusted.Their collection is so good.This is the best car dealer site in the town.They have so many collections.All products are gorgeous and good."
        }
    ]

    return (
        <div className='container mb-5'>
            <h2 className="text-center fw-bold my-5 text-dark">Our Testimonial</h2>
            <div className="testimonials">
                {
                    comments.map(comment => <Testimonial key={comment.id} comment={comment}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;