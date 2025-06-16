import * as api from '../../api';

import saveTwilioAccessToken from './saveTwilioAccessToken';

const refreshTwilioAccessToken = async () => {
  const token = await api.twilio.getToken();
  await saveTwilioAccessToken(token);
  return token;
};

export {refreshTwilioAccessToken};
