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
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(newData => {
                const match = newData.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText])

	const refetch = (data) => {
		if(data){
			fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(newData => {
                const match = newData.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
		}
	}

    const textChange = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    const gotoMyItem = () => {
        navigate('/addInventory');
    }

    return (
        <div style={{margin: "0 0 500px 0"}}>
            <HelmetTitle title='Inventory'></HelmetTitle>
            <div className=''>
                <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search..' />
            </div>
            {
                data.length === 0 && <>
                    <Loading></Loading>
                </>
            }
            <div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {
                        data.map(items => <InvididualItems key={items._id} items={items} refetch={refetch}></InvididualItems>)
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