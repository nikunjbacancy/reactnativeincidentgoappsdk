/**
 *
 * Asynchronously loads the component for FeedbackScreen
 *
 */

import { LoadingIndicator } from '../../../../components';
import React from 'react';
import loadable from '../../../../utils/loadable';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
