import React, {useState} from 'react';
import {useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Register.css';
import { Form, Button, Spinner} from 'react-bootstrap';

const Register = () => {

    const [loginData, setLoginData] = useState({})

    const {user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your password didnt match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    const {signInUsingGoogle} = useAuth();
   
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }


    return (
        <div className="register" id="register">
           
<div className="login-form">
<h2>Please Register</h2>

{!isLoading &&
<Form onSubmit={handleLoginSubmit}>
<Form.Group className="mt-3 flex-box" controlId="formBasicName">
<Form.Label className="m-3">Name:</Form.Label>
<Form.Control type="text" placeholder="Enter name" name="name" onBlur={handleOnChange}/>
</Form.Group>
<Form.Group className="mt-3 flex-box" controlId="formBasicEmail">
<Form.Label className="m-3">Email:</Form.Label>
<Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleOnChange}/>
</Form.Group>
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>

<Form.Group className="my-3 flex-box" controlId="formBasicPassword">
<Form.Label className="m-3">Password:</Form.Label>
<Form.Control type="password" placeholder="Password" name="password"  onBlur={handleOnChange}/>
</Form.Group>
<Form.Text className="text-muted">
Your password must contain letter, digit and symbol.
</Form.Text>
<Form.Group className="my-3 flex-box" controlId="formBasicPassword">
<Form.Label className="m-3">Retype:</Form.Label>
<Form.Control type="password" placeholder="Password" name="password2"  onBlur={handleOnChange}/>
</Form.Group>

{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}

<Button variant="danger px-5 mb-2" type="submit">
       Register
</Button>
<br />
<NavLink style={{textDecoration: 'none'}} to="/login">
    <Button variant="text text-danger border-danger ">Already Registered? Please Login...</Button>
</NavLink>
<br /> 
{/* google sign in */}
<button onClick={ handleGoogleLogin } className="btn btn-warning my-btn mt-3">Google Sign In</button>
</Form>}
<br/>
{isLoading &&  <Spinner animation="border" variant="danger" /> }
<br />
{user?.email &&  
<div class="alert alert-success" role="alert">
  Registration successful!
</div>}
{authError && <div class="alert alert-danger" role="alert">
  {authError}!
</div>}
            </div>
        </div>
    );
};

export default Register;