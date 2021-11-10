import React from 'react';
import './Blogs.css';
import blog1 from '../../../images/blog/b-1.png';
import blog2 from '../../../images/blog/b-2.png';
import blog3 from '../../../images/blog/b-3.png';

const Blogs = () => {
    return (

        <section>
            <h2 className="pt-5 mt-5">Read Our Blogs</h2>
            <div className="blogs">
            <div className="blog">
                <img src={blog1} alt="" />
                    <p>Leena Sonnubar</p>
                    <h3>Amazing Tour In Indonasia</h3>
                    <p>1 April, 2019</p>
                <button className="btn btn-warning m-3">Read More</button>
            </div>
            <div className="blog">
                <img src={blog2} alt="" />
                <p>Leena Sonnubar</p>
                    <h3>Amazing Tour In Indonasia</h3>
                    <p>1 April, 2019</p>
                    <button className="btn btn-warning m-3">Read More</button>
            </div>
            <div className="blog">
                <img src={blog3} alt="" />
                <p>Leena Sonnubar</p>
                    <h3>Amazing Tour In Indonasia</h3>
                    <p>1 April, 2019</p>
                    <button className="btn btn-warning m-3">Read More</button>
            </div>
        </div>
        </section>
    );
};

export default Blogs;