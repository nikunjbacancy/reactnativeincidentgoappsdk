import axios from '../axios';
export const endpoints = {
  feedback: 'feedback'
};
export default {
  send: feedback => axios.post(endpoints.feedback, feedback)
};
//# sourceMappingURL=index.js.map