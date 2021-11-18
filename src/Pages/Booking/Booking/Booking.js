import React, { useEffect, useState } from 'react';
import './Booking.css';
import { Form, Button, Spinner} from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import {Link} from 'react-router-dom'

const Booking = () => {
    const {packageId} = useParams();
    const [pacKage, setPackage] = useState({});
    const {user} = useAuth();
    

    useEffect( () =>{
        fetch(`https://safe-bastion-02103.herokuapp.com/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setPackage(data));
    }, [])

    const initialInfo = {buyerName: user.displayName, email: user.email, phone: '', address: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        setBookingInfo(newInfo);
        console.log(newInfo);
    }
    

    const handleBookingSubmit = e => {
        const booking = {
            ...bookingInfo,
            packageName: pacKage.name,
            packageImg: pacKage.img,
            packageDescription: pacKage.description,
            packagePrice: pacKage.cost,
            packageDays: pacKage.days,
        }
        console.log(booking);
        //send order to server
        fetch('https://safe-bastion-02103.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setBookingSuccess(true);
        //         history.push(redirect_uri)
            }
            console.log(data);

            
        })
        
        e.preventDefault();
    }

    return (
        <div className="flexible-container">


<div>
        <h3>Please provide these information to make a purchase</h3>


    
<Form onSubmit={handleBookingSubmit}>
    <Form.Group className="mt-3 d-flex" controlId="formBasicText">
        <Form.Label className="m-3">Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="buyerName" defaultValue={user.displayName} onBlur={handleOnChange}/>
    </Form.Group>
    <Form.Group className="mt-3 d-flex" controlId="formBasicEmail">
        <Form.Label className="m-3">Email:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" defaultValue={user.email} onBlur={handleOnChange}/>
    </Form.Group>
    <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="m-3">Address:</Form.Label>
        <Form.Control as="textarea" placeholder="Enter address" name="address" onBlur={handleOnChange} rows={3} />
    </Form.Group>
    <Form.Group className="mt-3 d-flex" controlId="formBasicNumber">
        <Form.Label className="m-3">Number:</Form.Label>
        <Form.Control type="number" placeholder="Enter our Number" name="phone" onBlur={handleOnChange}/>
    </Form.Group>
    <Form.Text className="text-muted">We'll never share your informations with anyone else.</Form.Text>




{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group> */}

<Button variant="danger px-5 mb-2" type="submit">
       Confirm Purchase
</Button>
{/* <br />
<NavLink style={{textDecoration: 'none'}} to="/login">
    <Button variant="text text-danger border-danger ">Already Registered? Please Login...</Button>
</NavLink>
<br />  */}
{/* google sign in */}
{/* <button onClick={ handleGoogleLogin } className="btn btn-warning my-btn mt-3">Google Sign In</button> */}
{bookingSuccess && <h1>Order Placed Successfully</h1>}
</Form>



    </div>

    {/* ------------ ----------------- ---------------------- --------------------- ---------------- -------------  Clicked product details section -------------- -------------- ------------ --------------- ----      ----- ------------- */}


          
            <div className="package">
            <img src={pacKage.img} alt="" /> 

            <div className="flexible-container">
            <h5>Cost: ${pacKage.cost}/per person</h5>
            <h5>Duratiion: {pacKage.days} Days | {pacKage.nights} Nights</h5>
            </div>

            <h2>{pacKage.name}</h2>
            <p className="px-3">{pacKage.description}</p>
            <Link to={`/booking/${packageId}`}>
            <button className="btn btn-warning my-2">Book Now</button>
            </Link>
        </div>
        </div>
    );
};

export default Booking;