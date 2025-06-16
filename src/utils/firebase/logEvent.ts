import analytics from '@react-native-firebase/analytics';
import { LogEvent } from '../../types';

const logEvent = (event: LogEvent, params?: {}) => {
  analytics().logEvent(event, params);
};

export default logEvent;
