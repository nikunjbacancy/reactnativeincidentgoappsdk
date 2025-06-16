/* eslint-disable @typescript-eslint/no-misused-promises */
import crashlytics from '@react-native-firebase/crashlytics';
// import * as api from '../../api';
import { AccessToken, Dict } from 'incident-code-core';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
// import { Client as TwilioClient } from 'twilio-chat/lib/client';
// import { Message as TwilioMessage } from 'twilio-chat/lib/message';
import { Client as TwilioClient } from '@twilio/conversations';
import { Message as TwilioMessage } from '@twilio/conversations';
import { convertToGiftedChatMessage } from '../../utils/chat';
import {
  getTwilioAccessTokenFromStorage,
  isTokenExpired,
  refreshTwilioAccessToken,
  saveTwilioAccessToken,
} from '../../utils/token';

import axios from '../axios';
import event, { AppEvent } from '../event';

export const endpoints = {
  twilio: 'twilio',
};

let client: TwilioClient;

const getToken = (): Promise<AccessToken> =>
  axios
    .post<AccessToken>(`${endpoints.twilio}/auth`)
    .then(response => response.data);

const updateClientToken = async () => {
  const token = await getToken();
  await client.updateToken(token.access_token || '');
  await saveTwilioAccessToken(token);
};

export default {
  init: async (accessToken: AccessToken) => {
    if (!client) {
      try {
        let token: AccessToken = accessToken;
        if (isTokenExpired(accessToken)) {
          token = await refreshTwilioAccessToken();
        }
        // client = await TwilioClient.create(token.access_token || '');
        client = new TwilioClient(token.access_token || '');
        client.on('stateChanged', (state) => {
          // //("conversation client state--->", state)
          if (state === 'initialized') {
            // Use the client

          }
        })

      } catch (error) {
        await updateClientToken();
        // await api.logger.logError({
        //   source: 'Twilio init',
        //   raw: JSON.stringify(error),
        // });
      } finally {
        if (client) {
          client.on('tokenAboutToExpire', updateClientToken);
          client.on('tokenExpired', updateClientToken);
        }
      }
    }
  },
  getToken,
  getMessages: async (incidentId: string) => {
    const token = await getTwilioAccessTokenFromStorage();
    if (isTokenExpired(token)) {
      await updateClientToken();
    }
    const channel = await client.getConversationByUniqueName(incidentId);
    if (channel.status !== 'joined') {
      await channel.join();
    }
    const channelMembers = await channel.getParticipants();
    const members: Dict<string> = {};

    forEach(channelMembers, member => {
      members[member.sid] = member.identity || '';
    });
    // //("-channelMembers-->",channelMembers)
    const messageAdded = async (message: TwilioMessage) => {
      // //("-new message arrived-->",message)
      await channel.setAllMessagesRead();
      const giftedChatMessage = convertToGiftedChatMessage(message, members);
      // //("gifted chat message -->",giftedChatMessage)
      event.emit(AppEvent.OnMessageAdded, giftedChatMessage);
    };

    channel.on('messageAdded', messageAdded);

    const messagePaginator = await channel.getMessages();

    return map(messagePaginator.items, message =>
      convertToGiftedChatMessage(message, members),
    ).reverse();
  },
  sendMessage: async (
    incidentId: string,
    message: string,
    messageAttributes?: Record<string, any>,
  ) => {
    const channel = await client.getConversationByUniqueName(incidentId);
    channel
      .sendMessage(message, messageAttributes)
      .then()
      .catch(error => {
        crashlytics().log('Twilio chat error caught...');
        // api.logger.logError({
        //   source: 'Chat Send Message Error',
        //   raw: JSON.stringify(error),
        //   message: error.message,
        // });
        crashlytics().recordError(error);
      });
  },
  removeChannelEvents: async (incidentId: string) => {
    try {
      const channel = await client.getConversationByUniqueName(incidentId);
      if (channel) {
        // //('channel removeAllListeners')
        channel.removeAllListeners();
      }
    } catch (e: any) {
      crashlytics().log('Find channel and remove listeners error');
      crashlytics().recordError(e);
    }
  },
};
