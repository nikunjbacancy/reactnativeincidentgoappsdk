/**
 *
 * Asynchronously loads the component for UpdateNameScreen
 *
 */

import { LoadingIndicator } from '../../../../components';
import React from 'react';
import loadable from '../../../../utils/loadable';
export default loadable(() => import('./index'), {
  fallback: /*#__PURE__*/React.createElement(LoadingIndicator, null)
});
//# sourceMappingURL=Loadable.js.map