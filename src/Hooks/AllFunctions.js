import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetData from './GetData';

const AllFunctions = () => {
    const [getData, setGetData] = GetData();
    let lastItem = 0;
    const navigate = useNavigate();

    const Delete = (id) => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = getData.filter(item => item._id !== id);
                    setGetData(remaining);
                }
            })
        if(lastItem === 1){
            navigate('/manageInventory');
        }
    }

    const DecreaseByOne = (item) => {

        console.log(item);

        if (parseInt(item.quantity) !== 1) {
            const newQuantity = parseInt(item.quantity) - 1;

            const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: newQuantity };

            const url = `http://localhost:5000/inventory/${item._id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    setGetData(data);
                });
        }
        else {
            lastItem = 1;
            Delete(item._id, lastItem);
        }
    }

    const IncreaseByOne = (item, number) => {

        console.log(item, typeof number);

        const newQuantity = parseInt(item.quantity) + parseInt(number);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: newQuantity };

        const url = `http://localhost:5000/inventory/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setGetData(data);
            });
    }

    return [DecreaseByOne, IncreaseByOne];
}

export default AllFunctions