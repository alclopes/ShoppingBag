// 02=> // Filtramos qual é a informação que exige o recalculo.
// #reselect#

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

const Cart = ({ cart, total, addItemCart, setShipping }) => {
	console.log('cart:', cart);

	return (
		<div>
			<h1>Shopping Bag</h1>
			<p>
				items: <strong>{cart.items.length}</strong>
			</p>
			<p>
				Freight: <strong>{cart.shipping_value}</strong>
			</p>
			<p>
				Total: <strong>{total}</strong>
			</p>
			<button onClick={addItemCart}>Add new item</button>
			<button onClick={setShipping}>Calculate Freight</button>
		</div>
	);
};

const calculateTotal = createSelector(
	(state) => state.cart.items,
	(items) => {
		console.log('Calculou o item');
		return items.reduce((subtotal, item) => subtotal + item.price, 0);
	}
);

// // Filtramos para que state.items e shipping_value gerem recalculo.
// const calculateTotal = createSelector(
// 	(state) => state.cart.items,
// 	(state) => state.cart.shipping_value,
// 	(items, shipping_value) => {
// 		console.log('Calculou');
// 		return (
// 			items.reduce((subtotal, item) => subtotal + item.price, 0) +
// 			shipping_value
// 		);
// 	}
// );

const mapStateToProps = (state) => {
	console.log('state.cart: ', state.cart);
	console.log('state.cart.itens: ', state.cart.items);
	return {
		cart: state.cart,
		// Importante: to reselect send only state
		total: calculateTotal(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	addItemCart: () => dispatch({ type: 'ADD_ITEM_CART' }),
	setShipping: () => dispatch({ type: 'SET_SHIPPING' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
