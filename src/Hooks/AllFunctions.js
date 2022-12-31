import GetData from './getData';

const AllFunctions = () => {
	const [getData, setGetData] = GetData();

	const DecreaseByOne = (item) => {
		const newQuantity = parseInt(item.quantity) - 1;
		let newItem;
		if (newQuantity > 0) {
			newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: newQuantity, stock: 'In Stock' };
		}
		else {
			newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: 0, stock: 'Stock Out' };
		}
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
		const newQuantity = parseInt(item.quantity) + parseInt(number);
		const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: newQuantity, stock: 'In Stock' };
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

	const UpdateStock = (item) => {
		const newItem = { name: item.name, description: item.description, price: item.price, img: item.img, supplierName: item.supplierName, quantity: item.quantity, stock: 'In Stock' };

		console.log(newItem)

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

	return [DecreaseByOne, IncreaseByOne, UpdateStock];
}

export default AllFunctions