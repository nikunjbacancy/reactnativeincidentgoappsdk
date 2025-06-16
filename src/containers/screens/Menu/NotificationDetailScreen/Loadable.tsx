/**
 *
 * Asynchronously loads the component for NotificationScreen
 *
 */

import { LoadingIndicator } from '../../../../components';
import React from 'react';
import loadable from '../../../../utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
