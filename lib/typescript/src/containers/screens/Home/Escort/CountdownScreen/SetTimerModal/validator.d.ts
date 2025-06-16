/**
 *
 * SetTimerModal form validator
 *
 */
import { FormatMessage } from 'types';
import * as Yup from 'yup';
declare const SetTimerSchema: (formatMessage: FormatMessage) => Yup.ObjectSchema<Yup.Shape<object, {
    hours: number;
    minutes: number;
    seconds: number;
}>>;
export default SetTimerSchema;
