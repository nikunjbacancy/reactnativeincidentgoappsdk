/**
 *
 * Create the store with dynamic reducers
 *
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from '../core/reactotron';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import createReduxPromiseListener from 'redux-promise-listener';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { rootSaga } from './sagas';

// Create redux store with history
const initialState = {};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'languageProvider']
};

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({
  sagaMonitor
});
const reduxPromiseListener = createReduxPromiseListener();

// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state
const middlewares = [sagaMiddleware];
const enhancers = [applyMiddleware(...middlewares, reduxPromiseListener.middleware), Reactotron.createEnhancer()];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,
// root reducer with router state
initialState, composeWithDevTools(...enhancers));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor, reduxPromiseListener as promiseListener };
//# sourceMappingURL=index.js.map