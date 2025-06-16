/**
 * WelcomeScreen Messages
 *
 * This contains all the text for the WarningScreen component.
 */

import { defineMessages } from 'react-intl';
export const scope = 'containers.welcomeScreen';
const messages = defineMessages({
  emergencyText: {
    id: `${scope}.emergency.text`
  },
  emergencyTitle: {
    id: `${scope}.emergency.title`
  },
  liveText: {
    id: `${scope}.live.text`
  },
  liveTitle: {
    id: `${scope}.live.title`
  },
  safetyText: {
    id: `${scope}.safety.text`
  },
  safetyTitle: {
    id: `${scope}.safety.title`
  },
  panicText: {
    id: `${scope}.panic.text`
  },
  panicTitle: {
    id: `${scope}.panic.title`
  },
  tipText: {
    id: `${scope}.tip.text`
  },
  tipTitle: {
    id: `${scope}.tip.title`
  },
  skip: {
    id: `${scope}.skip`
  }
});
export default messages;
//# sourceMappingURL=messages.js.map