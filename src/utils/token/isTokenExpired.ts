import { AccessToken } from 'incident-code-core';

const isTokenExpired = (token: AccessToken) => {
  if (token.expires_at) {
    return token.expires_at <= Date.now();
  }
  // if there is no expire time, the token is never expire
  return false;
};

export default isTokenExpired;
