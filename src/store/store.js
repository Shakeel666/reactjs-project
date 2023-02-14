import { createStore, applyMiddleware } from 'redux';
// import { createStoreHook} from 'react-redux';
// import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// const store = createStoreHook(rootReducer, applyMiddleware(...middlewares));


export default store;
