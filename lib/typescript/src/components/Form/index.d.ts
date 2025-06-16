import { FormikValues } from 'formik';
import { FC } from 'react';
import { AnyAction } from 'redux';
import { FluxAction, FluxErrorAction } from 'types';
interface Props {
    start: string;
    resolve: string;
    reject: string;
    setPayload?: (action: FluxAction, payload: any) => AnyAction;
    onResolve?: (action: FluxAction) => any;
    onReject?: (action: FluxErrorAction) => any;
    initialValues: FormikValues;
    validationSchema?: any | (() => any);
}
declare const Form: FC<Props>;
export default Form;
