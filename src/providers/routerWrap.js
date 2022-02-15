import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../screens/Home';
import Hello from '../screens/Hello';
import About from '../screens/About';
import Error404 from '../screens/Error404';

const RouterWrap = () => (
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route exact path='/Hello' element={<Hello />} />
		<Route exact path='/About' element={<About />} />
		<Route exact path='/Error404' element={<Error404 />} />
	</Routes>
);

export default RouterWrap;
