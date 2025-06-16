import { ChatMessage, Dict } from 'incident-code-core';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { Message as TwilioMessage } from '@twilio/conversations';
declare const convertToGiftedChatMessage: (message?: TwilioMessage | ChatMessage, members?: Dict<string>) => GiftedChatMessage;
export default convertToGiftedChatMessage;
