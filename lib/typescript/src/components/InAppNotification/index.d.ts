import { FC } from 'react';
interface WrapperProps {
    onPress?(): void;
    title?: string;
    message?: string;
}
declare const InAppNotification: FC<WrapperProps>;
export default InAppNotification;
