/**
 *
 * Asynchronously loads the component for PermissionScreen
 *
 */

import { LoadingIndicator } from '../../../../components';
import React from 'react';
import loadable from '../../../../utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
