import React from 'react';
import './Traveller.css';


const Traveller = ({traveller}) => {
    //const {traveller} = props;
    const { name, comment, img} = traveller;
    return (

        <div className="col-lg-4 col-md-6 col-sm-6 col-12 traveller">
            <img src={img} alt="" /> 
            <h2>{name}</h2>
            <p className="">{comment}</p>
        </div>
    );
};

export default Traveller;