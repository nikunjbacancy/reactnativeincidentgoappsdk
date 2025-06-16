/**
 * ErrorView messages
 *
 * This contains all the text for the ErrorView component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'errors';

const messages = defineMessages({
  addContactTitle: {
    id: `${scope}.addContactTitle`,
  },
  description: {
    id: `${scope}.description`,
  },
  footer: {
    id: `${scope}.footer`,
  },
  footerMax: {
    id: `${scope}.footerMax`,
  },
  noContacts: {
    id: `${scope}.noContacts`,
  },
  noMatches: {
    id: `${scope}.noMatches`,
  },
  searchPlaceholder: {
    id: `${scope}.searchPlaceholder`,
  },
  title: {
    id: `${scope}.title`,
  },
  notifications: {
    id: `${scope}.notifications`,
  },
});

export default messages;
