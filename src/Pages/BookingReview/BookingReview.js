import React from 'react';
import Packages from '../Home/Packages/Packages';
import Package from '../Home/Package/Package';
import usePackages from '../../hooks/usePackages';

const BookingReview = () => {
    const [packages] = usePackages();
    return (
        <div>
            <h2>My Bookings...</h2>
            <h2>{packages.length}</h2>
            {/* {
                packages.map(pacKage => <Package
                    id={pacKage.id}
                    pacKage ={pacKage}
                ></Package>)
            } */}
            {/* <Package></Package> */}
            <div></div>
        </div>
    );
};

export default BookingReview;