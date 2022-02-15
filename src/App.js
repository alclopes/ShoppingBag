import React from 'react';

import { Provider } from 'react-redux';
import store from './providers/store';

import RouterWrap from './providers/routerWrap';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './cart/elements/Header';

const App = () => (
	<Provider store={store}>
		<Router>
			<div className='container'>
				<Header />
				<RouterWrap />
			</div>
		</Router>
	</Provider>
);

export default App;
