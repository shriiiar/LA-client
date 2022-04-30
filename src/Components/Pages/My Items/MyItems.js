import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SingleMyItem from '../SingleMyItem/SingleMyItem';
import './MyItems.css'

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user?.email;
        const url = `https://boiling-oasis-47037.herokuapp.com/myItems?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user])

    console.log(myItems);
return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
        {
            myItems.map(items => <SingleMyItem key={items._id} item={items}></SingleMyItem>)
        }
    </div>
);
};

export default MyItems;