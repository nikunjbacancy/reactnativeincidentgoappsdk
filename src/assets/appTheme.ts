import DeviceInfo from 'react-native-device-info';
import { isAndroid, isIos } from '../utils/device';

import colors from './colors';
import fonts from './fonts';

const hasNotch = DeviceInfo.hasNotch();

const appTheme = {
  text: {
    color: colors.primary,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily,
  },
  highlightText: {
    color: colors.highlight,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily,
  },
  lightText: {
    color: colors.light,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily,
  },
  greyText: {
    color: colors.light,
    fontSize: fonts.normalSize,
    fontFamily: fonts.defaultFamily,
  },
  fonts,
  colors,
  device: {
    isIos,
    isAndroid,
    hasNotch,
  },
};

// export type Theme = typeof theme;
export default appTheme;
