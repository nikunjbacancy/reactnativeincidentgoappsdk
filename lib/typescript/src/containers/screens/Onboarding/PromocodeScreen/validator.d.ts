/**
 *
 * SignInCodeScreen form validator
 *
 */
import { FormatMessage } from 'types';
import * as Yup from 'yup';
declare const PromoCodeSchema: (formatMessage: FormatMessage) => Yup.ObjectSchema<Yup.Shape<object, {
    code: string;
}>>;
export default PromoCodeSchema;
