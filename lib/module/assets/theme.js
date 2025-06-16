import DeviceInfo from 'react-native-device-info';
// import { isAndroid, isIos } from '../utils/device';
import { isAndroid } from '../utils/device/isAndroid';
import isIos from '../utils/device/isIos';
import colors from './colors';
// import fonts from './fonts';
import fonts from './fonts';
import { sdkConfigs } from '../sdkConfigs';
const hasNotch = DeviceInfo.hasNotch();
const theme = {
  text: {
    color: colors.primary,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily
  },
  highlightText: {
    color: colors.highlight,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily
  },
  lightText: {
    color: colors.light,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily
  },
  greyText: {
    color: colors.light,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily
  },
  fonts,
  colors,
  sdkBackgroundColor: sdkConfigs.colors.backgroundColor == '' ? colors.white : sdkConfigs.colors.backgroundColor,
  sdkServiceBackgroundColor: sdkConfigs.colors.homeServiceBackgrondColor == '' ? colors.lightGrey : sdkConfigs.colors.homeServiceBackgrondColor,
  device: {
    isIos,
    isAndroid,
    hasNotch
  }
};
export default theme;
//# sourceMappingURL=theme.js.map