import { AccessToken } from 'incident-code-core';
export declare const endpoints: {
    twilio: string;
};
declare const _default: {
    init: (accessToken: AccessToken) => Promise<void>;
    getToken: () => Promise<AccessToken>;
    getMessages: (incidentId: string) => Promise<import("react-native-gifted-chat").IMessage[]>;
    sendMessage: (incidentId: string, message: string, messageAttributes?: Record<string, any>) => Promise<void>;
    removeChannelEvents: (incidentId: string) => Promise<void>;
};
export default _default;
