/**
 * NotificationListScreen messages
 *
 * This contains all the text for the NotificationListScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.notificationListScreen';

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
  },
  noRecords: {
    id: `${scope}.noRecords`,
  },
  markReadAll: {
    id: `${scope}.markReadAll`,
  },
  msgMarkReadAll: {
    id: `${scope}.msgMarkReadAll`,
  },
  yes: {
    id: `${scope}.yes`,
  },
  no: {
    id: `${scope}.no`,
  },
  
});

export default messages;
