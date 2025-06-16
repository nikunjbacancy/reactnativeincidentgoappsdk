import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppEvent, event } from '../../api';
import { NOTIFICATION_BADGES_KEY } from '../../containers/providers/NotificationProvider/constants';
import { Id } from 'incident-code-core';
import filter from 'lodash/filter';

import getBadges from './getBadges';

const removeBadge = async (incidentId: Id) => {
  const badges = await getBadges();
  const filteredBadges = filter(badges, b => b !== incidentId);
  await AsyncStorage.setItem(
    NOTIFICATION_BADGES_KEY,
    JSON.stringify(filteredBadges),
  );
  event.emit(AppEvent.OnNotificationBadge, filteredBadges);
};

export default removeBadge;
