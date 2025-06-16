/**
 * OrganizationScreen Messages
 *
 * This contains all the text for the OrganizationScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.organizationScreen';

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
  },
  alert: {
    id: `${scope}.alert`,
  },
  addNewOrganization: {
    id: `${scope}.addNewOrganization`,
  },
});

export default messages;
