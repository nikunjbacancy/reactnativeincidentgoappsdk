import { Config } from 'incident-code-core';

import axios from '../axios';

export const endpoints = {
  configs: 'configs',
};

export default {
  getConfigs: () => axios.get<Config>(endpoints.configs),
};
