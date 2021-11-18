import React, { useEffect, useState } from 'react';
import './BookingReview.css';
import useAuth from '../../hooks/useAuth';

const BookingReview = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([])

    useEffect( () => {
        const url = `https://safe-bastion-02103.herokuapp.com/userBookings?email=${user.email}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setBookings(data));
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
                alert('Want to delete?')
                const remaining = bookings.filter(booking => booking._id !== id);
                setBookings(remaining);
            }
           
        })
    }

    return (
        <div>
             <h2>My Bookings...</h2>
             <h2>Bookings: {bookings.length}</h2>
              {
                bookings.map(booking => <div key={booking._id}>
                    <div className="bookings">
                    <img className="img-fluid" src={booking.packageImg} alt="" />
                    <div>
                    <h6>Buyer Name: {booking.buyerName}</h6>
                    <h3>Package Name: {booking.packageName}</h3>
                    <h5>Days: {booking.packageDays}</h5>
                    <h5>Cost: ${booking.packagePrice}</h5>
                    <p>{booking.packageDescription}</p>
                  
                    <button onClick={ () => handleDelete(booking._id)} className="btn btn-warning">Delete</button>
                    </div>
                    </div>
                    </div>)
            }
         </div>




     );
 };
 



export default BookingReview;