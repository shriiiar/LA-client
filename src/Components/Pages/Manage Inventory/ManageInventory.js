import React, { useEffect, useState } from 'react';
import InvididualItems from '../Invididual Items/InvididualItems';
import './ManageInventory.css';

const ManageInventory = (props) => {
    const { data } = props;

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            {
                data.map(items => <InvididualItems key={items._id} items={items}></InvididualItems>)
            }
        </div>
    );
};

export default ManageInventory;