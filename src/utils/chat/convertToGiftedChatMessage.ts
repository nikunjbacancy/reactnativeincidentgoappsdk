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


import { ChatMessage, Dict } from 'incident-code-core';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { Message as TwilioMessage } from '@twilio/conversations';

const convertToGiftedChatMessage = (
  message?: TwilioMessage | ChatMessage,
  members?: Dict<string>,
): GiftedChatMessage => {
  if (message instanceof TwilioMessage) {
    return {
      _id: message.sid || '',
      text: message.body || '',
      createdAt: message.dateCreated || 0,
      user: {
        _id: members ? members[message.participantSid || ''] : '',
      },
    };
  }
  return {
    _id: message?.id || '',
    text: message?.content || '',
    createdAt: message?.createdAt || 0,
    user: {
      _id: message?.from || '',
    },
  };
};

export default convertToGiftedChatMessage;

