/**
 *
 * SignInCodeScreen form validator
 *
 */

import { FormatMessage } from 'types';
import * as Yup from 'yup';

import messages from './messages';

const SignInCodeSchema = (formatMessage: FormatMessage) =>
  Yup.object().shape({
    code: Yup.string()
      .length(4, formatMessage(messages.invalidCode))
      .required(formatMessage(messages.invalidCode)),
  });

export default SignInCodeSchema;
