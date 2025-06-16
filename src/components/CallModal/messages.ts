/**
 * CallModal Messages
 *
 * This contains all the text for the VideoRecordScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.callModal';

const messages = defineMessages({
  wantCall: {
    id: `${scope}.wantCall`,
  },
  emergency: {
    id: `${scope}.emergency`,
  },
  organization: {
    id: `${scope}.organization`,
  },
  call911: {
    id: `${scope}.call911`,
  },
});

export default messages;
