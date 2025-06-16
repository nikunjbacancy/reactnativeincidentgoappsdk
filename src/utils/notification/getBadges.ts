import AsyncStorage from '@react-native-async-storage/async-storage';
import { NOTIFICATION_BADGES_KEY } from '../../containers/providers/NotificationProvider/constants';
import { Id } from 'incident-code-core';

const getBadges = async (): Promise<Id[]> => {
  const badgesStr =
    (await AsyncStorage.getItem(NOTIFICATION_BADGES_KEY)) || JSON.stringify([]);
  return JSON.parse(badgesStr);
};

export default getBadges;
