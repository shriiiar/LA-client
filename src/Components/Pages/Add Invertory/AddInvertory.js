import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import GetData from '../../../Hooks/GetData';
import { toast, ToastContainer } from 'react-toastify';
import './AddInvertory.css';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import addImg from '../../../img/undraw_Add_files_re_v09g.png';

const AddInvertory = () => {

    const [getData, setGetData] = GetData();

    const EventSubmit = (event) => {

        const newItem = { name: event.target.name.value, description: event.target.description.value, price: event.target.price.value, img: event.target.img.value, supplierName: event.target.supplierName.value, quantity: event.target.quantity.value, email: event.target.email.value };

        event.preventDefault();
        const url = `https://boiling-oasis-47037.herokuapp.com/inventory`;
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
        // event.target.reset();
        toast('Items Added, Check My Items Section')
    };
    return (
        <div>
            <HelmetTitle title='Add To Inventory'></HelmetTitle>
            {/* <div className='form-container'>
                <div>
                    <h2 className='form-title mb-5 text-center'>Add To Inventory</h2>
                    <form onSubmit={EventSubmit}>
                        <div className="input-group">
                            <label htmlFor='name'>Name</label>
                            <input type="text" name="name" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='description'>Description</label>
                            <textarea type="text" name="description" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='img'>Image Url</label>
                            <input type="text" name="img" />
                        </div>
                        <div className="input-group">
                            <label htmlFor='price'>Price</label>
                            <input type="text" name="price" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='quantity'>Quantity</label>
                            <input type="number" name="quantity" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='supplierName'>Supplier Name</label>
                            <input type="text" name="supplierName" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor='email'>Your Email</label>
                            <input type="text" name="email" required />
                        </div>
                        <input className='form-submit' type="submit" required value="Submit" />
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div> */}
            <div style={{margin: "0 0 850px 0"}} class="page-add">
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
                                <input type="number" name="quantity" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='supplierName'>Supplier Name</label>
                                <input type="text" name="supplierName" required />
                            </div>
                            <div className="input-group w-75 mx-auto">
                                <label htmlFor='email'>Your Email</label>
                                <input type="text" name="email" required />
                            </div>
                            <input className='form-submit button-33 w-75 mx-auto' type="submit" required value="Submit" />
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