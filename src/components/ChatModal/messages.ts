/**
 * ChatModal Messages
 *
 * This contains all the text for the ChatModal component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'components.chatModal';

const messages = defineMessages({
  iNeedHelp: {
    id: `${scope}.iNeedHelp`,
  },
  someoneSuspicious: {
    id: `${scope}.someoneSuspicious`,
  },
});

export default messages;
