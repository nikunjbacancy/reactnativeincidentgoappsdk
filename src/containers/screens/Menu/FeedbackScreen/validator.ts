/**
 *
 * FeedbackScreen form validator
 *
 */

import { FormatMessage } from 'types';
import * as Yup from 'yup';

import messages from './messages';

const UpdateNameSchema = (formatMessage: FormatMessage) =>
  Yup.object().shape({
    email: Yup.string().email(formatMessage(messages.wrongEmail)),
    comment: Yup.string().required(formatMessage(messages.emptyComment)),
  });

export default UpdateNameSchema;
