import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AllFunctions from '../../../Hooks/AllFunctions';
import GetData from '../../../Hooks/GetData';
import './SingleInventory.css';

const SingleInventory = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car])

    const [DecreaseByOne, IncreaseByOne, DeleteByOne] = AllFunctions();
    const { name, description, price, img, supplierName, quantity } = car;

    const EventSubmit = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value);
        console.log(typeof number, typeof car.quantity);
        IncreaseByOne(car, number);
        event.target.reset();
    }

    const goToManageInventory = () => {
        navigate('/manageInventory');
    }
    return (
        <div className='p-5 row flex-column'>
            <aside className="profile-card">
                <header>
                    <img src={img} className="hoverZoomLink my-3" />
                    <h1>{name}</h1>
                    <h2>{supplierName}</h2>
                </header>
                <div className="profile-bio">
                    <p className='fs-4'>{description}</p>
                    <p className='fs-4'><span style={{ color: "#cf0a2c" }}>{price}</span></p>
                    <p className='fs-4'>Quantity <span style={{ color: "#cf0a2c" }}>{quantity}</span></p>
                    <button onClick={() => DecreaseByOne(car)} className='button-2'>Delivered</button>
                </div>
            </aside>
            <div className='card form-container p-5 card-form'>
                <div>
                    <h2 className='form-title mb-5 text-center'>Restock Inventory</h2>
                    <form onSubmit={EventSubmit}>
                        <div className="input-group">
                            <label htmlFor='number'>Restock </label>
                            <input type="number" name="number" min="1" required />
                        </div>
                        <input className='form-submit w-25' type="submit" required value="Restock" />
                    </form>

                </div>
            </div>
            <button onClick={() => goToManageInventory()} className='button-1 mx-auto w-25'>Manage Inventory</button>
        </div>
    );
};

export default SingleInventory;