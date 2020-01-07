import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [SagaMiddleware];

const store = createStore(rootReducer, middlewares);

SagaMiddleware.run(rootSaga);

export default store;
