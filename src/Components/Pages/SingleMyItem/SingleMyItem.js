import React from 'react';
import './SingleMyItem.css'
const SingleMyItem = (props) => {
    const { name, description, price, img, supplierName, quantity } = props.item;
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
        </div>
        </div>
    );
};

export default SingleMyItem;