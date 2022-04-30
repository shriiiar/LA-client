import { useState, useEffect } from 'react';
import GetData from './GetData';

const AllFunctions = () => {
    const [getData, setGetData] = GetData();

    const DecreaseByOne = (item) => {

        console.log(item);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity - 1 };

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

    const IncreaseByOne = (item, number) => {

        console.log(item, number);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity + number };

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

    const DeleteByOne = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
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
        }
    }
    return [DecreaseByOne, IncreaseByOne, DeleteByOne];
}

export default AllFunctions