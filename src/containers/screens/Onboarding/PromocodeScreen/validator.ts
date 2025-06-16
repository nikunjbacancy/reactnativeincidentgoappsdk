/**
 *
 * SignInCodeScreen form validator
 *
 */

import { FormatMessage } from 'types';
import * as Yup from 'yup';

import messages from './messages';

const PromoCodeSchema = (formatMessage: FormatMessage) =>
  Yup.object().shape({
    code: Yup.string()
      .length(6, formatMessage(messages.promoCodeLength))
      .required(formatMessage(messages.invalidCode)),
  });

export default PromoCodeSchema;
