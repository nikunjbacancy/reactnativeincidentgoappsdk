/**
 *
 * LanguageProvider
 *
 * This component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `src/translations`)
 *
 */

import React, { Children, FC } from 'react';
import { IntlProvider } from 'react-intl';
import messages from '../../../translations';
import { flattenMessages } from '../../../utils/common';
import { useSelector } from '../../../utils/hooks';
import { makeSelectLocale } from './selectors';

const LanguageProvider: FC = ({ children }) => {
  const locale = useSelector(makeSelectLocale());
  return (
    <IntlProvider
      key={locale}
      locale={locale}
      defaultLocale={locale}
      messages={flattenMessages(messages[locale])}>
      {Children.only(children)}
    </IntlProvider>
  );
};

export { LanguageProvider };
