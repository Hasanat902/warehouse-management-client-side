import React from 'react';
import notfound from '../../../images/not-found.jpg';

const NotFound = () => {
    return (
        <div className='text-center mt-5' style={{height: "79vh"}}>
            <h2 className='mb-4 text-danger'>The page you requested is not found</h2>
            <img className='img-fluid'f src={notfound} alt="" />
        </div>
    );
};

export default NotFound;