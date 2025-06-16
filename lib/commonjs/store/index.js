"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.promiseListener = exports.persistor = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _reactotron = _interopRequireDefault(require("../core/reactotron"));
var _redux = require("redux");
var _reduxDevtoolsExtension = require("redux-devtools-extension");
var _reduxPersist = require("redux-persist");
var _reduxPromiseListener = _interopRequireDefault(require("redux-promise-listener"));
var _reduxSaga = _interopRequireDefault(require("redux-saga"));
var _reducers = _interopRequireDefault(require("./reducers"));
var _sagas = require("./sagas");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * Create the store with dynamic reducers
 *
 */

// Create redux store with history
const initialState = {};
const persistConfig = {
  key: 'root',
  storage: _asyncStorage.default,
  whitelist: ['app', 'languageProvider']
};

// create our new saga monitor
const sagaMonitor = _reactotron.default.createSagaMonitor();
const sagaMiddleware = (0, _reduxSaga.default)({
  sagaMonitor
});
const reduxPromiseListener = exports.promiseListener = (0, _reduxPromiseListener.default)();

// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state
const middlewares = [sagaMiddleware];
const enhancers = [(0, _redux.applyMiddleware)(...middlewares, reduxPromiseListener.middleware), _reactotron.default.createEnhancer()];
const persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _reducers.default);
const store = exports.store = (0, _redux.createStore)(persistedReducer,
// root reducer with router state
initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(...enhancers));
const persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);
sagaMiddleware.run(_sagas.rootSaga);
//# sourceMappingURL=index.js.map