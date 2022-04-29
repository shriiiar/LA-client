import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllFunctions from '../../../Hooks/AllFunctions';
import './InvididualItems.css'

const InvididualItems = (props) => {
    const { items, fromHome } = props;
    const { name, description, price, img, supplierName, quantity } = items;
    const [DecreaseByOne, IncreaseByOne, DeleteByOne] = AllFunctions();
    const navigate = useNavigate();
    const newPath = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='p-5'>
            <div className='card h-100 my-4 justify-content-center'>
                <h5 className='my-3 text-start'><span className='item-span'>{name}</span></h5>
                <div className='img-div'>
                    <img src={img} className='img-fluid' alt="car images" />
                </div>
                <p className='text-start fs-5'>{description}</p>
                <h5 className='text-start'>Rating: <span className='item-span'>{price}</span></h5>
                <h5 className='text-start'>Supplier Name: <span className='item-span'>{supplierName}</span></h5>
                <h5 className='text-start'>Quantity: <span className='item-span'>{quantity}</span></h5>
                {
                    fromHome !== undefined ? <>
                        <button onClick={() => newPath(items._id)} className='button-33'>Update</button>
                    </>
                    :
                    <>
                    <button onClick={() => DeleteByOne(items._id)} className='button-33'>Delete Item</button>
                    </>
                }
            </div>
        </div>
    );
};

export default InvididualItems;