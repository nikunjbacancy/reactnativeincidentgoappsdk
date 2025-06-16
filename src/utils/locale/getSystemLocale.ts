import get from 'lodash/get';
import { findBestAvailableLanguage } from 'react-native-localize';
// import * as RNLocalize from 'react-native-localize'

import constants from './constants';

const getSystemLocale = (): string =>
  // IOS
  get(findBestAvailableLanguage(constants.availableLocales), 'languageTag') ||
  // Default
  constants.defaultAppLocale;

// export default getSystemLocale;
export { getSystemLocale };
