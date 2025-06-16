/**
 * MyTipsScreen Messages
 *
 * This contains all the text for the MyTipsScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.myTipsScreen';

const messages = defineMessages({
  title: {
    id: `${scope}.title`,
  },
  address: {
    id: `${scope}.address`,
  },
  confirmButtonText: {
    id: `${scope}.confirmButtonText`,
  },
  confirmDescription: {
    id: `${scope}.confirmDescription`,
  },
  confirmTitle: {
    id: `${scope}.confirmTitle`,
  },
  noAddress: {
    id: `${scope}.noAddress`,
  },
  noIncidentsMessage: {
    id: `${scope}.noIncidentsMessage`,
  },
  noIncidentsTitle: {
    id: `${scope}.noIncidentsTitle`,
  },
  shareMessages: {
    id: `${scope}.shareMessages`,
  },
  shareTitle: {
    id: `${scope}.shareTitle`,
  },
  violationInfo: {
    id: `${scope}.violationInfo`,
  },
  escort: {
    id: `${scope}.escort`,
  },
  passiveEscort: {
    id: `${scope}.passiveEscort`,
  },
});

export default messages;
