import 'react-native-root-siblings';
import { AppRegistry } from 'react-native';



import App from './src/App';
  
    // Polyfills required to use Intl with Hermes engine
    require('@formatjs/intl-getcanonicallocales/polyfill');
    require('@formatjs/intl-locale/polyfill');
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/en');
    require('@formatjs/intl-numberformat/polyfill');
    require('@formatjs/intl-numberformat/locale-data/en');
    require('@formatjs/intl-datetimeformat/polyfill');
    require('@formatjs/intl-datetimeformat/locale-data/en');
    require('@formatjs/intl-datetimeformat/add-golden-tz');
// }
  
AppRegistry.registerComponent('main', () => App);
