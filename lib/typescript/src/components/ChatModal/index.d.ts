import { Organization } from 'incident-code-core';
import React from 'react';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
type Props = {
    isVisible: boolean;
    hideModal(): void;
    onShow?(): void;
    onHide?(): void;
    organization: Organization;
    messages: GiftedChatMessage[];
    onMessageSent(message: GiftedChatMessage[]): void;
    isReadMode?: boolean;
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
