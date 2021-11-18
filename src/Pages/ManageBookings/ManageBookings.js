import React, { useEffect, useState } from 'react';
import './ManageBookings.css';
import useAuth from '../../hooks/useAuth';

const ManageBookings = () => {
    const {user} = useAuth();
    const [bookings, setbookings] = useState([])

    useEffect( () => {
        fetch('https://safe-bastion-02103.herokuapp.com/bookings')
        .then(res=>res.json())
        .then(data => setbookings(data))
    }, [])

    const handleDelete = id => {
        const url = `https://safe-bastion-02103.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if('data.deleteCount'){
                alert('deleted')
                const remaining = bookings.filter(booking => booking._id !== id);
                setbookings(remaining);
            }
           
        })
        
    }
    return (
        <div>
            <h1>Manage All bookings</h1>
            <h2>Bookings: {bookings.length}</h2>
            {
                bookings.map(booking => <div key={booking._id}>
                   <div className="container-fluid bookings">
                   <img className="img-fluid" src={booking.packageImg} alt="" />
                    <div>
                    <h5>Package Name: {booking.packageName}</h5>
                    <h6>Buyer Name: {booking.buyerName}</h6>
                    <h5>Days: {booking.packageDays}</h5>
                    <h5>Cost: ${booking.packagePrice}</h5>
                    <p>{booking.packageDescription}</p>
                    <div className="d-flex">
                    
                    <button onClick={ () => handleDelete(booking._id)} className="btn btn-warning height-5">Delete</button>
                    </div>
                    </div>
                   </div>
                    </div>)
            }
        </div>
    );
};

export default ManageBookings;