import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../img/google-logo-9824.png'
import githubLogo from '../../../img/github-logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hooks/UseToken';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement, errorElement1;

    if(loading || loading1){
        <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
        errorElement1 = <></>
    }
    else if(error1){
        errorElement1 = <p className='text-danger'>Error: {error1?.message}</p>
        errorElement = <></>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
                <p className='mt-2 px-2 fs-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-danger w-50'></div>
            </div>
            {errorElement}
            {errorElement1}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='button-33 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={googleLogo} alt="" />
                    <span className='px-2'>Sign In</span>
                </button>
                {/* <button
                    onClick={() => signInWithGithub()}
                    className='button-33 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={githubLogo} alt="" />
                    <span className='px-2'>Sign In</span>
                </button> */}
            </div>
        </div>
    );
};

export default SocialLogin;