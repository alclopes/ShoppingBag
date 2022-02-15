import { createStore } from 'redux';

import reducer from '../cart/reducers';

const store = createStore(reducer);

export default store;
