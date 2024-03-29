import React, {useState} from 'react';
import {useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { Form, Button, Spinner} from 'react-bootstrap';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth();

    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }



    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }


    return (
        <div className=" login">
            <div className="login-form">
           <h2>Please Login</h2>


<Form onSubmit={handleLoginSubmit}>
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

{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}

<Button variant="danger px-5 mb-2" type="submit">
       Login
</Button>

<br />
<NavLink style={{textDecoration: 'none'}} to="/register">
    <Button className="" variant="text text-danger border-danger ">New User? Please Register...</Button>
</NavLink>

<br />
<button onClick={ handleGoogleLogin } className="btn btn-warning my-btn my-3">Google Sign In</button>
<br />

{isLoading &&  <Spinner animation="border" variant="danger" /> }
<br />
{user?.email &&  
<div class="alert alert-success" role="alert">
  User logged in successfully!
</div>}
{authError && <div class="alert alert-danger" role="alert">
  {authError}!
</div>}

</Form>



            </div>

            {/* <h2>Please Login</h2>
            <button onClick={ handleGoogleLogin } className="btn btn-warning">Google Sign In</button> */}
        </div>
    );
};

export default Login;