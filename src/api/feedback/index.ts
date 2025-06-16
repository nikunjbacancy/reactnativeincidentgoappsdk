import { Feedback } from 'incident-code-core';

import axios from '../axios';

export const endpoints = {
  feedback: 'feedback',
};

export default {
  send: (feedback: Feedback) => axios.post(endpoints.feedback, feedback),
};
