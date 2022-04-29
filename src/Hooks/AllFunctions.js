import { useState, useEffect } from 'react';

const AllFunctions = () => {
    
    const DecreaseByOne = item => {

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity - 1 };

        // useEffect(() => {
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
            });
        // }, [])
    }

    const IncreaseByOne = (item, number) => {

        console.log(item, number);

        const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity + number };

        // useEffect(() => {
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
            });
        // }, [])
    }

    return [DecreaseByOne, IncreaseByOne]
}

export default AllFunctions