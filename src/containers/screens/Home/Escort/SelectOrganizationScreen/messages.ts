/**
 * SelectOrganizationScreen Messages
 *
 * This contains all the text for the SelectOrganizationScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.escort.selectOrganizationScreen';

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
  },
  info: {
    id: `${scope}.info`,
  },
  call911Title: {
    id: `${scope}.call911Title`,
  },
  call911Info: {
    id: `${scope}.call911Info`,
  },
  call911: {
    id: `${scope}.call911`,
  },
  manageOrganizations: {
    id: `${scope}.manageOrganizations`,
  },
  commentPlaceholder: {
    id: `${scope}.commentPlaceholder`,
  },
  addComment: {
    id: `${scope}.addComment`,
  },
  optional: {
    id: `${scope}.optional`,
  },
  openPermissionsConfig: {
    id: `containers.permissionScreen.openPermissionsConfig`,
  },
  requestEscort: {
    id: `${scope}.requestEscort`,
  },
});

export default messages;
