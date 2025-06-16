import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppEvent, event } from '../../api';
import { NOTIFICATION_BADGES_KEY } from '../../containers/providers/NotificationProvider/constants';
import getBadges from './getBadges';
const addBadge = async incidentId => {
  const badges = await getBadges();
  badges.push(incidentId);
  await AsyncStorage.setItem(NOTIFICATION_BADGES_KEY, JSON.stringify(badges));
  event.emit(AppEvent.OnNotificationBadge, badges);
};
export default addBadge;
//# sourceMappingURL=addBadge.js.map