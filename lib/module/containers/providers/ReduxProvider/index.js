/**
 *
 * ReduxProvider
 *
 * This component connects the redux with redux persist
 *
 */

import React, { Children } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../../../store';
const ReduxProvider = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(Provider, {
    store: store,
    context: ReactReduxContext
  }, /*#__PURE__*/React.createElement(PersistGate, {
    loading: null,
    persistor: persistor
  }, Children.only(children)));
};
export default ReduxProvider;
//# sourceMappingURL=index.js.map