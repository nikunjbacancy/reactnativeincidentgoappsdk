/**
 * FeedbackScreen messages
 *
 * This contains all the text for the FeedbackScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'containers.feedbackScreen';

const messages = defineMessages({
  commentInput: {
    id: `${scope}.commentInput`,
  },
  emailInput: {
    id: `${scope}.emailInput`,
  },
  info: {
    id: `${scope}.info`,
  },
  guideDescription: {
    id: `${scope}.guideDescription`,
  },
  guideText: {
    id: `${scope}.guideText`,
  },
  faq: {
    id: `${scope}.faq`,
  },
  privacy: {
    id: `${scope}.privacy`,
  },
  tos: {
    id: `${scope}.tos`,
  },
  title: {
    id: `${scope}.title`,
  },
  send: {
    id: `${scope}.send`,
  },
  wrongEmail: {
    id: `${scope}.wrongEmail`,
  },
  emptyComment: {
    id: `${scope}.emptyComment`,
  },
  feedbackSentTitle: {
    id: `${scope}.feedbackSentTitle`,
  },
  feedbackSentDescription: {
    id: `${scope}.feedbackSentDescription`,
  },
  ok: {
    id: `${scope}.ok`,
  },
  locationLogDesc: {
    id: `${scope}.locationLogDesc`,
  },
  locationLogButton: {
    id: `${scope}.locationLogButton`,
  },
});

export default messages;
