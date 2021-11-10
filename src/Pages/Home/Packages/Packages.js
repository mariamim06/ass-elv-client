import React, { useEffect, useState} from 'react';
import Package from '../Package/Package';
import './Packages.css'




const Packages = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('https://safe-bastion-02103.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    
    return (
        <div id="packages">
            <h2 className="my-5">Our Packages</h2>
            <div className="package-container">
            
            {
                packages.map(pacKage => <Package
                    id={pacKage.id}
                    pacKage ={pacKage}
                ></Package>)
            }
        </div>
        </div>
    );
};

export default Packages;