import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='bg-dark text-secondary pt-5 pb-3 text-center'>
            <p>Copyright {year} by Car BD, All Right Reserved.</p>
        </div>
    );
};

export default Footer;