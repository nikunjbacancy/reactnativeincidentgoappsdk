export interface LocalNotificationProps {
    title?: string;
    message?: string;
    group?: string;
    link?: string;
    userInfo?: object;
    isOnGoing?: boolean;
    channelId?: string;
    channelName?: string;
}
declare const sendLocalNotification: ({ title, message, userInfo, isOnGoing }: LocalNotificationProps) => void;
export { sendLocalNotification };
