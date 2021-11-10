import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Travellers from '../Travellers/Travellers';
import Blogs from '../Blogs/Blogs';
import './Home.css';

const Home = () => {
    return (
        <div id="home" className="home">
            <Banner></Banner>
            <Packages></Packages>
            <Travellers></Travellers>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;