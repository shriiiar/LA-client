import React, { useEffect, useState } from 'react';
import GetData from '../../../Hooks/GetData';
import InvididualItems from '../Invididual Items/InvididualItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [car, setCar] = GetData();

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                car.map(items => <InvididualItems key={items._id} items={items}></InvididualItems>)
            }
        </div>
    );
};

export default ManageInventory;