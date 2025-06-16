/**
 *
 * MyAccountScreen form validator
 *
 */

import { FormatMessage } from '../../../../types';
import { text } from '../../../../utils/regex';
import * as Yup from 'yup';

import messages from './messages';

const UpdateNameSchema = (formatMessage: FormatMessage) =>
  Yup.object().shape({
    firstName: Yup.string()
      .matches(text, formatMessage(messages.nameValidate))
      .required(formatMessage(messages.nameValidate)),
    lastName: Yup.string()
      .matches(text, formatMessage(messages.nameValidate))
      .required(formatMessage(messages.nameValidate)),
  });

export default UpdateNameSchema;
