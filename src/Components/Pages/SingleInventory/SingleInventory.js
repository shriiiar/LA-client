import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AllFunctions from '../../../Hooks/AllFunctions';
import GetData from '../../../Hooks/getData';
import './SingleInventory.css';
import { Button, Modal } from 'react-bootstrap';

const SingleInventory = () => {

	const { id } = useParams();
	const navigate = useNavigate();

	const [car, setCar] = useState([]);
	const [modalShow, setModalShow] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:5000/inventory/${id}`)
			.then(res => res.json())
			.then(data => setCar(data));
	}, [])

	const [DecreaseByOne, IncreaseByOne, UpdateStock] = AllFunctions();
	const { name, description, price, img, supplierName, quantity, stock } = car;

	// const EventSubmit = (event) => {
	// 	event.preventDefault();

	// 	console.log(event.target)

	// 	const newItem = { name: event.target.name.value, description: event.target.description.value, price: event.target.price.value, img: event.target.img.value, supplierName: event.target.supplierName.value, quantity: event.target.quantity.value, stock: stock, email: event.target.email.value };

	// 	UpdateStock(newItem)
	// 	setModalShow(false)
	// 	event.target.reset();
	// }

	const EventSubmit = (event) => {
		event.preventDefault();

		const newItem = { name: event.target.name.value, description: event.target.description.value, price: event.target.price.value, img: event.target.img.value, supplierName: event.target.supplierName.value, quantity: event.target.quantity.value, stock: event.target.stock.value, email: event.target.email.value };

		const url = `http://localhost:5000/inventory/${car._id}`;
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

				fetch(`http://localhost:5000/inventory/${id}`)
					.then(res => res.json())
					.then(data => setCar(data));
			});

		event.target.reset();
	};

	const goToManageInventory = () => {
		navigate('/manageInventory');
	}

	function MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						{/* <h3>Class {className}</h3> */}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={EventSubmit}>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='name'>Name</label>
							<input placeholder={car.name} type="text" name="name" required />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='description'>Description</label>
							<textarea placeholder={car.description} type="text" name="description" required />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='img'>Image Url</label>
							<input placeholder={car.img} type="text" name="img" />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='price'>Price</label>
							<input placeholder={car.price} type="text" name="price" required />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='quantity'>Quantity</label>
							<input placeholder={car.quantity} type="number" name="quantity" min="1" required />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='stock'>Stock</label>
							<input placeholder={car.stock} type="text" name="stock" required />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='supplierName'>Supplier Name</label>
							<input placeholder={car.supplierName} type="text" name="supplierName" required />
						</div>
						<div className="input-group w-75 mx-auto">
							<label htmlFor='email'>Your Email</label>
							<input placeholder={car.email} type="text" name="email" require />
						</div>
						<input className='form-submit button-33 w-75 d-flex justify-content-center mx-auto mt-4' type="submit" required value="Submit" />
					</form>
				</Modal.Body>
				<Modal.Footer>
					{/* <button className='button-87' onClick={() => deleteExam()}>Delete Quiz</button> */}
				</Modal.Footer>
			</Modal>
		);
	}

	const refetch = (type) => {
		fetch(`http://localhost:5000/inventory/${id}`)
			.then(res => res.json())
			.then(data => setCar(data));

		if (type === 'decrease') {
			DecreaseByOne(car)
		}
	}

	return (
		<div className='p-5 row flex-column'>
			<aside className="profile-card">
				<header>
					<img src={img} alt="car" className="hoverZoomLink my-3" />
					<h1>{name}</h1>
					<h2>{supplierName}</h2>
				</header>
				<div className="profile-bio">
					<p className='fs-4'>{description}</p>
					<p className='fs-4'><span style={{ color: "#cf0a2c" }}>{price}</span></p>
					<p className='fs-4'>Quantity <span style={{ color: "#cf0a2c" }}>{quantity}</span></p>
					<p className='fs-4'><span style={{ color: "#cf0a2c" }}>{stock}</span></p>
					<button onClick={() => setModalShow(true)} className='button-2 me-3'>Update Stock</button>
					<button onClick={() => refetch('decrease')} className='button-2'>Delivered</button>
				</div>
			</aside>
			<div className='form-container card-form'>
				<div>
				</div>
			</div>
			<button onClick={() => goToManageInventory()} className='button-1 mx-auto w-50'>Manage Inventory</button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
};

export default SingleInventory;