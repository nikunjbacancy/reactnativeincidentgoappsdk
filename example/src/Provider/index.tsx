/**
 *
 * ReduxProvider
 *
 * This component connects the redux with redux persist
 *
 */

import React, { Children, FC } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store';

const ReduxProvider: FC = ({ children }) => {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <PersistGate loading={null} persistor={persistor}>
        {Children.only(children)}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
