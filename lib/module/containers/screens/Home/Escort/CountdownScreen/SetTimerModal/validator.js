/**
 *
 * SetTimerModal form validator
 *
 */

import * as Yup from 'yup';
import messages from '../messages';
const maxHours = 23;
const maxMinutes = 59;
const maxSeconds = 59;
const SetTimerSchema = formatMessage => Yup.object().shape({
  hours: Yup.number().integer(formatMessage(messages.timerNumberValidation)).max(maxHours, `Hour ${formatMessage(messages.timerMaxValueValidation)} ${maxHours}`),
  minutes: Yup.number().integer(formatMessage(messages.timerNumberValidation)).max(maxMinutes, `Minute ${formatMessage(messages.timerMaxValueValidation)} ${maxMinutes}`),
  seconds: Yup.number().integer(formatMessage(messages.timerNumberValidation)).max(maxSeconds, `Second ${formatMessage(messages.timerMaxValueValidation)} ${maxSeconds}`)
});
export default SetTimerSchema;
//# sourceMappingURL=validator.js.map