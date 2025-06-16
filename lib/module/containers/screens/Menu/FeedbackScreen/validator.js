/**
 *
 * FeedbackScreen form validator
 *
 */

import * as Yup from 'yup';
import messages from './messages';
const UpdateNameSchema = formatMessage => Yup.object().shape({
  email: Yup.string().email(formatMessage(messages.wrongEmail)),
  comment: Yup.string().required(formatMessage(messages.emptyComment))
});
export default UpdateNameSchema;
//# sourceMappingURL=validator.js.map