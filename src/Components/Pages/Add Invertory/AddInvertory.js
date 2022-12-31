import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import GetData from '../../../Hooks/getData';
import { toast, ToastContainer } from 'react-toastify';
import './AddInvertory.css';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddInvertory = () => {

    const [getData, setGetData] = GetData();
    const [user] = useAuthState(auth);
    const EventSubmit = (event) => {

        const newItem = { name: event.target.name.value, description: event.target.description.value, price: event.target.price.value, img: event.target.img.value, supplierName: event.target.supplierName.value, quantity: event.target.quantity.value, stock: event.target.stock.value, email: event.target.email.value };

        event.preventDefault();
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setGetData(result);
            })
        event.target.reset();
        toast('Items Added, Check My Items Section')
    };
    return (
        <div>
            <HelmetTitle title='Add To Inventory'></HelmetTitle>
            <div style={{ margin: "0 0 1050px 0" }} class="page-add">
                <div class="container-add">
                    <div class="left-add">
                        <div class="login">Add Items</div>
                        <img src={addImg} className='img-fluid' alt="" />
                    </div>
                    <div class="right-add">
                        <form onSubmit={EventSubmit}>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='name'>Name</label>
                                <input type="text" name="name" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='description'>Description</label>
                                <textarea type="text" name="description" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='img'>Image Url</label>
                                <input type="text" name="img" />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='price'>Price</label>
                                <input type="text" name="price" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='quantity'>Quantity</label>
                                <input type="number" name="quantity" min="1" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='stock'>Stock</label>
                                <input value={`In Stock`} type="text" name="stock" required readOnly />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='supplierName'>Supplier Name</label>
                                <input type="text" name="supplierName" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='email'>Your Email</label>
                                <input value={user?.email} type="text" name="email" required readOnly />
                            </div>
                            <input className='form-submit button-33 w-75 mx-auto mt-4' type="submit" required value="Submit" />
                            <ToastContainer></ToastContainer>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default AddInvertory;