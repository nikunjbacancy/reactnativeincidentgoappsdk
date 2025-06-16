"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _conversations = require("@twilio/conversations");
// import { ChatMessage, Dict } from 'incident-code-core';
// import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat/lib/types';
// import { Message as TwilioMessage } from 'twilio-chat/lib/message';
// // import { Message as TwilioMessage  } from '@twilio/conversations';

// const convertToGiftedChatMessage = (
//   message?: TwilioMessage | ChatMessage,
//   members?: Dict<string>,
// ): GiftedChatMessage => {
//   if (message instanceof TwilioMessage) {
//     return {
//       _id: message.sid,
//       text: message.body,
//       createdAt: message.timestamp,
//       user: {
//         _id: members ? members[message.memberSid] : '',
//       },
//     };
//   }
//   return {
//     _id: message?.id || '',
//     text: message?.content || '',
//     createdAt: message?.createdAt || 0,
//     user: {
//       _id: message?.from || '',
//     },
//   };
// };

// export default convertToGiftedChatMessage;

const convertToGiftedChatMessage = (message, members) => {
  if (message instanceof _conversations.Message) {
    return {
      _id: message.sid || '',
      text: message.body || '',
      createdAt: message.dateCreated || 0,
      user: {
        _id: members ? members[message.participantSid || ''] : ''
      }
    };
  }
  return {
    _id: (message === null || message === void 0 ? void 0 : message.id) || '',
    text: (message === null || message === void 0 ? void 0 : message.content) || '',
    createdAt: (message === null || message === void 0 ? void 0 : message.createdAt) || 0,
    user: {
      _id: (message === null || message === void 0 ? void 0 : message.from) || ''
    }
  };
};
var _default = exports.default = convertToGiftedChatMessage;
//# sourceMappingURL=convertToGiftedChatMessage.js.map