import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AllFunctions from '../../../Hooks/AllFunctions';
import GetData from '../../../Hooks/GetData';
import './InvididualItems.css'

const InvididualItems = (props) => {
    const { items, fromHome } = props;
    const { name, description, price, img, supplierName, quantity, stock } = items;
    const [DecreaseByOne, IncreaseByOne] = AllFunctions();
    const navigate = useNavigate();

    const [car, setCar] = useState([]);
    const [show, setShow] = useState(false);
    const [getData, setGetData] = GetData();

    useEffect(() => {
        fetch(`https://boiling-oasis-47037.herokuapp.com/inventory`)
            .then(res => res.json())
            .then(data => setCar(data));
    }, [car])

    const newPath = (id) => {
        navigate(`/inventory/${id}`);
    }

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
                    <h5 className='card__description'>{stock}</h5>
                    {
                        fromHome !== undefined ? <>
                            <button onClick={() => newPath(items._id)} className='button-33 my-3 w-50 mx-auto'>Update</button>
                        </>
                            :
                            <>
                                <div className="d-flex flex-column">
                                    <button onClick={() => newPath(items._id)} className='button-33 my-3 w-50 mx-auto'>Update</button>
                                    <button onClick={() => Delete(items._id)} className='button-33 w-50 mx-auto mb-3'>Delete Item</button>
                                </div>
                            </>
                    }
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Yowza</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure You Want To Delete {items.name}?</Modal.Body>
                <Modal.Footer>
                    <button className='button-33' variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className='button-33' variant="primary" onClick={() => confirm(items._id)}>
                        Proceed
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default InvididualItems;