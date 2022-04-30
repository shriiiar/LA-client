import { useState, useEffect } from 'react';
import getData from './GetData';

const AllFunctions = () => {
    const [car, setCar] = getData();
    const DecreaseByOne = (item) => {

        console.log(item);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity - 1 };

        // useEffect(() => {
        const url = `https://boiling-oasis-47037.herokuapp.com/inventory/${item._id}`;
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
                setCar(data);
            });
        // }, [])
    }

    const IncreaseByOne = (item, number) => {

        console.log(item, number);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity + number };

        // useEffect(() => {
        const url = `https://boiling-oasis-47037.herokuapp.com/inventory/${item._id}`;
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
                setCar(data);
            });
        // }, [])
    }

    const DeleteByOne = id => {
        console.log(id);
        const url = `https://boiling-oasis-47037.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = car.filter(item => item._id !== id);
                    setCar(remaining);
                }
            })
    }

    return [DecreaseByOne, IncreaseByOne, DeleteByOne];
}

export default AllFunctions