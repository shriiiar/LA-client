import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetData from '../../../Hooks/GetData';
import AllFunctions from '../../../Hooks/AllFunctions';
import './SingleMyItem.css'
import { Button, Modal } from 'react-bootstrap';
const SingleMyItem = (props) => {
    const { item, NoItem } = props;
    const { name, description, price, img, supplierName, quantity } = item;
    const [getData, setGetData] = GetData();
    const [DecreaseByOne, IncreaseByOne] = AllFunctions();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const confirm = id => {
        const url = `https://boiling-oasis-47037.herokuapp.com/inventory/${id}`;
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

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://boiling-oasis-47037.herokuapp.com/inventory`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [data])

    const navigate = useNavigate();
    const newPath = (id) => {
        navigate(`/inventory/${id}`);
    }

    const Delete = id => {
        console.log(id);
        handleShow();
    }
    return (
        <div className='p-5'>
            <div className='card border-0'>
                <img src={img} class="card__image" alt="" />
                <div class="card__overlay">
                    <div class="card__header">
                        <div class="card__header-text fs-1">
                            <h3 class="card__title">{name}</h3>
                            <span class="card__status">{supplierName}</span>
                        </div>
                    </div>
                    <p className="card__description pb-2 fs-5">{price}</p>
                    <p className="card__description fs-5 pb-2">{description}</p>
                    <h4 className='card__description'>Quantity {quantity}</h4>
                    <div className="d-flex flex-column">
                        <button onClick={() => newPath(item._id)} className='button-33 my-3 w-50 mx-auto'>Update</button>
                        <button onClick={() => Delete(item._id)} className='button-33 w-50 mx-auto mb-3'>Delete Item</button>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Yowza</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure You Want To Delete {item.name}?</Modal.Body>
                <Modal.Footer>
                    <button className='button-33' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className='button-33' variant="primary" onClick={() => confirm(item._id)}>
                        Proceed
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default SingleMyItem;