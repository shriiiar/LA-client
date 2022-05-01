import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../../firebase.init'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from '../Social Login/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Hooks/UseToken';
import carPng from '../../../img/undraw_electric_car_b7hl.png';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');


    let from = location.state?.from?.pathname || "/";
    let errorElement = <></>;

    const eventSetEmail = (event) => {
        setEmail(event.target.value);
    }

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    

    const [token] = useToken(user);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    const EventSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email !== "") {
            await sendPasswordResetEmail(email);
            toast("Email Sent");
        } else {
            toast.error("please enter your email address", {
                theme: "colored",
            });
        }
    };
    if (error) {
        errorElement = <div className='my-3'>
            <p className="text-danger"> {error?.message}</p>
        </div>
    }
    return (
        <div className='row'>
            <div className="col-lg-7 col-md-12 col-sm-12 order-2 order-sm-2 order-md-2 order-lg-1">
                <img className='wave img-fluid' src={carPng} alt="svg car image" />
            </div>
            <div className="col-lg-5 col-md-12 order-1 col-sm-12 order-sm-1 order-md-1 order-lg-2">
                <div className='form-container'>
                    <div>
                        <h2 className='form-title mb-5 text-center'>Login</h2>
                        <form onSubmit={EventSubmit}>
                            <div className="input-group">
                                <label htmlFor='email'>Email</label>
                                <input onBlur={eventSetEmail} ref={emailRef} type="email" name="email" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor='password'>Password</label>
                                <input ref={passwordRef} type="password" name="password" />
                            </div>
                            <input className='form-submit button-33' type="submit" required value="Login" />
                        </form>
                        {errorElement}
                        <p className='my-3 fs-5'>
                            Already have an account? <button className='form-link bg-transparent border-0' onClick={resetPassword}>Reset Password</button>
                        </p>
                        <p className='my-3 fs-5'>
                            New User? <Link className='form-link' to='/signup'>Sign Up</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );

};

export default Login;