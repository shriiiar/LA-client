import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/AxiosPrivate';
import auth from '../../../firebase.init';
import SingleMyItem from '../SingleMyItem/SingleMyItem';
import emptyCartPic from '../../../img/empty cart.jpg';
import './MyItems.css'
import HelmetTitle from '../../Shared/HelmetTitle/HelmetTitle';
import Loading from '../../Shared/Loading/Loading';

const MyItems = () => {
    const [myItems, setMyItems] = useState([]);
    const [data, setData] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getMtItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myItems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getMtItems();

    }, [user])

    const goToAddItems = () => {
        navigate('/addInventory');
    }

    return (
        <div>
            <HelmetTitle title='My Items'></HelmetTitle>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    myItems.map(items => <SingleMyItem key={items._id} item={items}></SingleMyItem>)
                }
            </div>
            {
                myItems.length === 0 && <>
                    <p className='text-center fs-2 button-1 w-50 mx-auto'>You Have Not Added Any Items</p>
                    <button onClick={() => goToAddItems()} className='button-33'>Add Items To Inventory</button>
                    <img className='img-fluid d-flex mx-auto' src={emptyCartPic} width='1000px' alt="" />
                </>
            }
        </div>

    );
};

export default MyItems;