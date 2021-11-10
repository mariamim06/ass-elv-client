import axios from 'axios';
import React from 'react';
import {useForm} from "react-hook-form";
import './AddPackage.css'


const AddPackage = () => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = data =>{ 
        console.log(data);

        axios.post('https://safe-bastion-02103.herokuapp.com/packages', data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }

    return (
        <div className="add-package">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("cost")} placeholder="Cost" />
                <input type="number" {...register("days")} placeholder="Days" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit"/>
            </form>
        </div>
    );
};

export default AddPackage;