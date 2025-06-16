import keys from 'lodash/keys';
import messages from '../../translations';

export default {
  defaultAppLocale: 'en-US',
  availableLocales: keys(messages),
};
