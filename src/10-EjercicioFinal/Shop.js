import React, { Component } from 'react'

const products = [
	{
		id: 1,
		name: "Product1",
		price: 200
	},
	{
		id: 2,
		name: "Product2",
		price: 500
	},{
		id: 3,
		name: "Product3",
		price: 1200
	}
];

export default class Shop extends Component {

	state = {
		selectedProducts: [],
		couponName: '',
		isCouponValid: false
	}

	componentDidMount() {
		let selectedProducts = JSON.parse(localStorage.selectedProducts || '[]');
		let isCouponValid = !!localStorage.isCouponValid;

		this.setState({selectedProducts, isCouponValid});
	}

	render() {
		return (
			<div>
				<div className="products">
					{products.map(product =>
						<div key={product.id} className="product">
							<div className="productName">{product.name}</div>
							<div className="productPrice">{product.price}</div>
							<button onClick={() => this.addProduct(product)}>Añadir</button>
						</div>
					)}
				</div>
				<hr/>
				<div className="cart">
					Cart <span>Total {this.totalPrice()}$</span>
					<ul className="cartProducts">
						{this.state.selectedProducts.map((product, key) =>
							<li key={key} className="product">
								<div className="productName">{product.name}</div>
								<div className="productPrice">{product.price}</div>
								<button onClick={() => this.removeProduct(product)}>Borrar</button>
							</li>
						)}
					</ul>
				</div>
				<div className="coupon">
					<input value={this.state.couponName}
						onChange={this.handleChange} type="text"/>
					<button onClick={this.verifyCoupon}>Aplicar</button>
				</div>
			</div>
		)
	}

	addProduct = (product) => {
		let productClone = [...this.state.selectedProducts, product];
		this.setState({selectedProducts: productClone}, () => console.log(this.state.selectedProducts));

		this.updateLocalstorage(productClone, "selectedProducts");
	}

	removeProduct = (product) => {
		let newProducts = this.state.selectedProducts.filter(p => p !== product);
		this.setState({selectedProducts: newProducts});
		this.updateLocalstorage(newProducts, "selectedProducts");
	}

	totalPrice = () => {
		let total = this.state.selectedProducts.reduce((acum, item) => acum + item.price, 0);
		if(this.state.isCouponValid){
			total *= 0.9;
		}
		return total;
	}

	handleChange = (e) =>{
		let couponValue = e.target.value;
		this.setState({couponName: couponValue});
	}

	verifyCoupon = () =>{
		if(this.state.couponName === "SAVE10"){
			this.setState({isCouponValid: true})
			this.updateLocalstorage(true, "isCouponValid");
		}else{
			alert("Cupón caducado, listillo")
		}
	}

	updateLocalstorage = (data, attr) => {
		localStorage[attr] = JSON.stringify(data);
	}
}