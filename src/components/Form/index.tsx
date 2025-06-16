import { Formik, FormikValues } from 'formik';
import React, { FC } from 'react';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { AnyAction } from 'redux';
import { promiseListener } from '../../store';
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

const Form: FC<Props> = ({
  children,
  start,
  resolve,
  reject,
  setPayload,
  onResolve,
  onReject,
  initialValues,
  validationSchema,
}) => (
  <MakeAsyncFunction
    listener={promiseListener}
    start={start}
    resolve={resolve}
    reject={reject}
    setPayload={setPayload}
    getPayload={onResolve}
    getError={onReject}
  >
    {(onSubmit: () => Promise<any>) => (
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <>{children}</>
      </Formik>
    )}
  </MakeAsyncFunction>
);

export default Form;
