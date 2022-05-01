import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InvididualItems from '../Invididual Items/InvididualItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [pageCount, setpageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(newData => {
                const match = newData.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText, data])

    useEffect(() => {
        fetch(`http://localhost:5000/inventory?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                const match = data.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText, page, size]);

    useEffect(() => { // For pagination
        fetch('http://localhost:5000/carsCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 2);
                setpageCount(pages);
            })
    }, [])

    const textChange = (event) => { // getting search result
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    const gotoMyItem = () => {
        navigate('/addInventory');
    }

    return (
        <div>
            <div className=''>
                <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search..' />
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    data.map(items => <InvididualItems key={items._id} items={items}></InvididualItems>)
                }
            </div>
            <div className='pagination mx-auto justify-content-center'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button onClick={() => setPage(number)} className={page === number ? 'selected' : 'button-33'}>{number + 1}</button>)
                }
                <select className='button-33 my-3 m-0' onChange={e => setSize(e.target.value)} name="" id="">
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                </select>
            </div>
            <button onClick={() => gotoMyItem()} className='button-33'>Add New Item</button>
        </div>
    );
};

export default ManageInventory;