/**
 * WarningScreen Messages
 *
 * This contains all the text for the WarningScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.warningScreen';

const messages = defineMessages({
  message: {
    id: `${scope}.message`,
  },
  call911: {
    id: `${scope}.call911`,
  },
  button: {
    id: `${scope}.button`,
  },
  locationMessage: {
    id: `${scope}.locationMessage`,
  },
  duress: { id: `${scope}.duress` },
});

export default messages;
