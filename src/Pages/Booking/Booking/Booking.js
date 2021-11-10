import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

const Booking = () => {
    const {packageId} = useParams();
    const [pacKage, setPackage] = useState({});

    useEffect( () =>{
        fetch(`http://localhost:5000/packages/${packageId}`)
        .then(res => res.json())
        .then(data => setPackage(data));
    }, [])

    return (
        <div >
          
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