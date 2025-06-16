/**
 *
 * SignInScreen form validations
 *
 */

import { FormatMessage } from '../../../../types';
import { phone } from '../../../../utils/regex';
import * as Yup from 'yup';

import messages from './messages';

const SignInSchema = (formatMessage: FormatMessage) =>
  Yup.object().shape({
    phone: Yup.string()
      .matches(phone, formatMessage(messages.phoneLength))
      .required(formatMessage(messages.phoneRequired)),
    agreeTos: Yup.boolean().oneOf(
      [true],
      formatMessage(messages.agreeTosRequired),
    ),
  });

export default SignInSchema;
