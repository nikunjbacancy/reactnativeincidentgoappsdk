/**
 *
 * Create the store with dynamic reducers
 *
 */
/// <reference types="redux-persist/types/persistreducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
declare const reduxPromiseListener: any;
declare const store: import("redux").Store<import("redux-persist/es/persistReducer").PersistPartial, import("redux").Action<any>>;
declare const persistor: import("redux-persist").Persistor;
export { store, persistor, reduxPromiseListener as promiseListener };
