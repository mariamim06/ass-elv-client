import React from 'react';
import {useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="p-5 m-5 ">
            <h2>Please Login</h2>
            <button onClick={ handleGoogleLogin } className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;