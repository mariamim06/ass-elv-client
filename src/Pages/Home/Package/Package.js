import React from 'react';
import './Package.css'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {f073} from '@fortawesome/fas fa-calendar-alt'

const Package = ({pacKage}) => {
    //const {package} = props;
    const { _id, name, cost, days, nights, img, ratings, description} = pacKage;
    return (
        <div className="package">
            <img src={img} alt="" /> 

            <div className="flexible-container">
            <h5>${cost}/per person</h5>
            <h5>{days} Days | {nights} Nights</h5>
            </div>

            <h2>{name}</h2>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
            <button className="btn btn-warning my-2">Book {name.toLowerCase()} </button>
            </Link>
        </div>
    );
};

export default Package;