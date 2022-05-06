import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import Loading from '../../Shared/Loading/Loading';
import InvididualItems from '../Invididual Items/InvididualItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://boiling-oasis-47037.herokuapp.com/inventory')
            .then(res => res.json())
            .then(newData => {
                const match = newData.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText, data])

    const textChange = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    const gotoMyItem = () => {
        navigate('/addInventory');
    }

    return (
        <div>
            <HelmetTitle title='Inventory'></HelmetTitle>
            <div className=''>
                <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search..' />
            </div>
            {
                data.length === 0 && <>
                    <h2>Loading..</h2>
                    <Loading></Loading>
                </>
            }
            <div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        data.map(items => <InvididualItems key={items._id} items={items}></InvididualItems>)
                    }
                </div>
                {
                    data.length !== 0 && <button onClick={() => gotoMyItem()} className='button-2 my-5'>Add New Item</button>
                }
            </div>
        </div>
    );
};

export default ManageInventory;