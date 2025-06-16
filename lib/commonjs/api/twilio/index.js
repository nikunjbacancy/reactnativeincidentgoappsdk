"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _crashlytics = _interopRequireDefault(require("@react-native-firebase/crashlytics"));
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var _map = _interopRequireDefault(require("lodash/map"));
var _conversations = require("@twilio/conversations");
var _chat = require("../../utils/chat");
var _token = require("../../utils/token");
var _axios = _interopRequireDefault(require("../axios"));
var _event = _interopRequireWildcard(require("../event"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable @typescript-eslint/no-misused-promises */

// import * as api from '../../api';

// import { Client as TwilioClient } from 'twilio-chat/lib/client';
// import { Message as TwilioMessage } from 'twilio-chat/lib/message';

const endpoints = exports.endpoints = {
  twilio: 'twilio'
};
let client;
const getToken = () => _axios.default.post(`${endpoints.twilio}/auth`).then(response => response.data);
const updateClientToken = async () => {
  const token = await getToken();
  await client.updateToken(token.access_token || '');
  await (0, _token.saveTwilioAccessToken)(token);
};
var _default = exports.default = {
  init: async accessToken => {
    if (!client) {
      try {
        let token = accessToken;
        if ((0, _token.isTokenExpired)(accessToken)) {
          token = await (0, _token.refreshTwilioAccessToken)();
        }
        // client = await TwilioClient.create(token.access_token || '');
        client = new _conversations.Client(token.access_token || '');
        client.on('stateChanged', state => {
          // //("conversation client state--->", state)
          if (state === 'initialized') {
            // Use the client
          }
        });
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
  getMessages: async incidentId => {
    const token = await (0, _token.getTwilioAccessTokenFromStorage)();
    if ((0, _token.isTokenExpired)(token)) {
      await updateClientToken();
    }
    const channel = await client.getConversationByUniqueName(incidentId);
    if (channel.status !== 'joined') {
      await channel.join();
    }
    const channelMembers = await channel.getParticipants();
    const members = {};
    (0, _forEach.default)(channelMembers, member => {
      members[member.sid] = member.identity || '';
    });
    // //("-channelMembers-->",channelMembers)
    const messageAdded = async message => {
      // //("-new message arrived-->",message)
      await channel.setAllMessagesRead();
      const giftedChatMessage = (0, _chat.convertToGiftedChatMessage)(message, members);
      // //("gifted chat message -->",giftedChatMessage)
      _event.default.emit(_event.AppEvent.OnMessageAdded, giftedChatMessage);
    };
    channel.on('messageAdded', messageAdded);
    const messagePaginator = await channel.getMessages();
    return (0, _map.default)(messagePaginator.items, message => (0, _chat.convertToGiftedChatMessage)(message, members)).reverse();
  },
  sendMessage: async (incidentId, message, messageAttributes) => {
    const channel = await client.getConversationByUniqueName(incidentId);
    channel.sendMessage(message, messageAttributes).then().catch(error => {
      (0, _crashlytics.default)().log('Twilio chat error caught...');
      // api.logger.logError({
      //   source: 'Chat Send Message Error',
      //   raw: JSON.stringify(error),
      //   message: error.message,
      // });
      (0, _crashlytics.default)().recordError(error);
    });
  },
  removeChannelEvents: async incidentId => {
    try {
      const channel = await client.getConversationByUniqueName(incidentId);
      if (channel) {
        // //('channel removeAllListeners')
        channel.removeAllListeners();
      }
    } catch (e) {
      (0, _crashlytics.default)().log('Find channel and remove listeners error');
      (0, _crashlytics.default)().recordError(e);
    }
  }
};
//# sourceMappingURL=index.js.map