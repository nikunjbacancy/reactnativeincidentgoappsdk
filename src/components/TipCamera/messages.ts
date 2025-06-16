/**
 * NewTipCamera Messages
 *
 * This contains all the text for the NewTipCamera component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.newTipCamera';

const messages = defineMessages({
  back: {
    id: `${scope}.back`,
  },
  canceled: {
    id: `${scope}.canceled`,
  },
  noLocation: {
    id: 'errors.noLocation',
  },
  permissionWarning: {
    id: `${scope}.permissionWarning`,
  },
  permissionCameraBody: {
    id: `${scope}.permissionCameraBody`,
  },
  permissionRecordAudioBody: {
    id: `${scope}.permissionRecordAudioBody`,
  },
  ok: {
    id: `${scope}.ok`,
  },
  cancel: {
    id: `${scope}.cancel`,
  },
});

export default messages;
