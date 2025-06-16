/* eslint-disable no-console */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REMOTE_LOGGER_KEY, USER_PHONE_KEY } from '../../containers/app/constants';
import { ErrorLog } from 'incident-code-core';
import isEmpty from 'lodash/isEmpty';
import { getInfo, getVersion } from '../../utils/device';

import axios from '../axios';

const getRemoteLogger = async () => {
  const remoteLogger = (await AsyncStorage.getItem(REMOTE_LOGGER_KEY)) || '';
  return JSON.parse(remoteLogger);
};

const getUserPhone = async () => AsyncStorage.getItem(USER_PHONE_KEY);

export enum LogLevel {
  log = 'log',
  error = 'error',
  debug = 'debug',
  warn = 'warn',
}

export const endpoints = {
  log: 'log',
};

const log = async (
  level: LogLevel,
  context: string,
  message: string,
  ...args: any[]
) => {
  const userPhone = await getUserPhone();
  const remoteLogger = await getRemoteLogger();
  if (!isEmpty(remoteLogger)) {
    axios.post(endpoints.log, {
      level,
      context,
      message,
      args: args.length === 0 ? undefined : args,
      user: userPhone,
      device: getInfo(),
      version: getVersion(),
    });
  }

  console[level](`${context}:`, message, ...args);
};

const logError = async (error: ErrorLog) => {
  await axios.post(`${endpoints.log}/error`, error);
};

export default {
  log: (context: string, message: string, ...args: any[]) => {
    log(LogLevel.log, context, message, args);
  },
  error: (context: string, message: string, ...args: any[]) => {
    log(LogLevel.error, context, message, args);
  },
  debug: (context: string, message: string, ...args: any[]) => {
    log(LogLevel.debug, context, message, args);
  },
  warn: (context: string, message: string, ...args: any[]) => {
    log(LogLevel.warn, context, message, args);
  },
  logError,
};
