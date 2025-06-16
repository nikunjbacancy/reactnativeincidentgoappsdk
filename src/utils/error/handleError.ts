import crashlytics from '@react-native-firebase/crashlytics';
import { AxiosError } from 'axios';

const handleError = (error: AxiosError) => {
  //("error:" + JSON.stringify(error));
  crashlytics().log('handleError triggered...');
  crashlytics().recordError(error);
  if (error?.response?.data.message) {
    return new Error(error?.response?.data.message);
  }
  if (error?.response?.data.error) {
    return new Error(error?.response?.data.error);
  }
  if (error?.response?.data) {
    return new Error(error?.response?.data);
  }
  return new Error('Unknown error');
};

export default handleError;
