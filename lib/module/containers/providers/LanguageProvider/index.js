/**
 *
 * LanguageProvider
 *
 * This component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `src/translations`)
 *
 */

import React, { Children } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../../../translations';
import { flattenMessages } from '../../../utils/common';
import { useSelector } from '../../../utils/hooks';
import { makeSelectLocale } from './selectors';
const LanguageProvider = ({
  children
}) => {
  const locale = useSelector(makeSelectLocale());
  return /*#__PURE__*/React.createElement(IntlProvider, {
    key: locale,
    locale: locale,
    defaultLocale: locale,
    messages: flattenMessages(messages[locale])
  }, Children.only(children));
};
export { LanguageProvider };
//# sourceMappingURL=index.js.map