import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);
        
    }

    return (
        <div className='w-50 mx-auto' style={{height: "79vh"}}>
            <h2 className='text-center mt-2 text-info'>Please LogIn</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>Don't have an account? <Link to='/register' className='text-decoration-none'>Please Register</Link></p>
        </div>
    );
};

export default Login;