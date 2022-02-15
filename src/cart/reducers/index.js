// Componente consolidador dos reducers

import { combineReducers } from 'redux';

import cart from './cart';

export default combineReducers({
	cart,
});
