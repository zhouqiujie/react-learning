import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import rootSaga from './sagas/rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);