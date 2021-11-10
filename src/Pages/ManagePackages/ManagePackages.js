import React, { useState, useEffect  } from 'react';
import Packages from '../Home/Packages/Packages';
// import usePackages from '../../hooks/usePackages';

const ManagePackages = () => {
  
    const [packages, setPakages] = useState([])
    useEffect( () => {
        fetch('https://safe-bastion-02103.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data => setPakages(data))
    }, [])

    const handleDelete = id => {
        const url = `https://safe-bastion-02103.herokuapp.com/packages${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if('data.deleteCount'){
                alert('deleted')
                const remaining = packages.filter(pacKage => pacKage._id !== id);
                setPakages(remaining);
            }
           
        })
    }
    return (
        <div>
            <h2>Manage Pakages</h2>
            {
                packages.map(pacKage => <div key={pacKage._id}>
                    <img src={pacKage.img} alt="" />
                    <h3>{pacKage.name}</h3>
                    <p>{pacKage.description}</p>
                    <button onClick={ () => handleDelete(pacKage._id)} className="btn btn-warning">Delete</button>
                    </div>)
            }
        </div>
    );
};

export default ManagePackages;