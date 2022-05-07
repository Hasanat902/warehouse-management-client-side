import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    const [user] = useAuthState(auth);
    let errorMessage;

    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";

    if(error){
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>;
    }

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);        
    }

    const resetPassword = async() => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast("Sent Email");
        }
        else{
            toast("Please enter your email address first");
        }
    }

    return (
        <div className='w-50 mx-auto' style={{height: "79vh"}}>
            <h2 className='text-center mt-2 text-info'>Please LogIn</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>
                {errorMessage}
                <Button className='w-50 mx-auto d-block' variant="info" type="submit">
                    Login
                </Button>
            </Form>
            <p className='mt-2'>Forgot Password?<button onClick={resetPassword} className='btn btn-link text-decoration-none'>Reset Password</button></p>
            <p>Don't have an account? <Link to='/register' className='text-decoration-none'>Please Register</Link></p>
            <ToastContainer></ToastContainer>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;