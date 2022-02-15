// Lista de ações que podem ser disparadas para os reducers
export function addItemCart() {
	return {
		type: 'ADD_ITEM_CART',
	};
}

export function setShipping() {
	return {
		type: 'SET_SHIPPING',
	};
}
