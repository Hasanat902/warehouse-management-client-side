import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorMessage;

    if(user || user1){
        navigate('/home');
    }

    if(error || error1){
        errorMessage = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }


    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{height: 1}} className='bg-secondary w-50'></div>
                <div className='mx-2 mb-2'>or</div>
                <div style={{height: 1}} className='bg-secondary w-50'></div>
            </div>
            {errorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-secondary w-50 d-block mx-auto'>
                <img style={{width: '30px'}} src={google} alt="" />
                <span className='fw-bold text-white ms-3'>Sign in with Google</span>
            </button>
            <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 d-block mx-auto mt-2'>
                <img style={{width: '30px'}} src={github} alt="" />
                <span className='fw-bold text-white ms-3'>Sign in with Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;