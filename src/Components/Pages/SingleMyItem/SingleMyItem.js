import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetData from '../../../Hooks/GetData';
import AllFunctions from '../../../Hooks/AllFunctions';
import './SingleMyItem.css'
const SingleMyItem = (props) => {
    const { item } = props;
    const { name, description, price, img, supplierName, quantity } = item;
    const [getData, setGetData] = GetData();
    const [DecreaseByOne, IncreaseByOne, DeleteByOne] = AllFunctions();

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/inventory`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [data])

    const navigate = useNavigate();
    const newPath = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='p-5'>
            <div className='card h-100 my-4 justify-content-center'>
                <h5 className='my-3 text-center'><span className='item-span'>{name}</span></h5>
                <div className='img-div'>
                    <img src={img} width="500px" className='img-fluid' alt="car image" />
                </div>
                <p className='text-center fs-5'>{description}</p>
                <h5 className='text-center'>Rating: <span className='item-span'>{price}</span></h5>
                <h5 className='text-center'>Supplier Name: <span className='item-span'>{supplierName}</span></h5>
                <h5 className='text-center'>Quantity: <span className='item-span'>{quantity}</span></h5>
                <button onClick={() => newPath(props.item._id)} className='button-33 my-3'>Update</button>
                <button onClick={() => DeleteByOne(props.item._id)} className='button-33'>Delete Item</button>
            </div>
        </div>
    );
};

export default SingleMyItem;