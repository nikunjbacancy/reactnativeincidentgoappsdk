import { Alert } from 'react-native';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import {
  check,
  openSettings,
  request,
  RESULTS,
} from 'react-native-permissions';

import getPermissions from '../permission/getPermissions';
import { OptionsForCachedFine } from './constants';
import { onGeolocationError } from './onError';
import onSuccess from './onSuccess';

const getCachedFinePosition = () => {
  return new Promise<GeoPosition>((resolve: any, reject: any) => {
    const permissions = getPermissions();
    console.log("getCachedFinePosition==>",permissions)
    console.log("OptionsForCachedFine==>",OptionsForCachedFine)
    const getPosition = () => {
      Geolocation.getCurrentPosition(
        position => onSuccess(resolve, position),
        error => onGeolocationError(reject, error),
        OptionsForCachedFine,
      );
    };
    check(permissions.bestLocation).then(checkResult => {
      console.log("checkResult===>",checkResult)
      if (checkResult === RESULTS.GRANTED) {
        getPosition();
      } else {
        request(permissions.bestLocation).then(requestResult => {
          if (requestResult === RESULTS.GRANTED) {
            getPosition();
          } else {
            Alert.alert(
              'Permission Warning',
              'This app needs location permission to ALWAYS to work',
              [{ text: 'Open settings', onPress: openSettings }],
              {
                cancelable: false,
              },
            );
          }
        });
      }
    });
  });
};

export default getCachedFinePosition;
