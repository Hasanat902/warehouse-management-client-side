import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-50 mx-auto' style={{height: "79vh"}}>
            <h2 className='text-center mt-2 text-info'>Please Register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="info" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-2'>Already have an account? <Link to='/login' className='text-decoration-none'>Please LogIn</Link></p>
        </div>
    );
};

export default Register;