import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';

import ScreenActionButton, {
  ScreenActionButtonProps,
} from '../ScreenActionButton';

interface Props extends ScreenActionButtonProps {
  disabledWhenNot?: string;
  submitWhenFormIsValid?: boolean;
}

const ScreenActionButtonField: FC<Props> = ({
  submitWhenFormIsValid,
  disabledWhenNot = '',
  onCancel,
  ...rest
}) => {
  const { handleSubmit, isValid } = useFormikContext();
  const [field] = useField(disabledWhenNot.toString());
  return (
    <ScreenActionButton
      disabled={submitWhenFormIsValid ? !isValid : !field.value}
      onPress={() => handleSubmit()}
      onCancel={onCancel}
      {...rest}
    />
  );
};

export default ScreenActionButtonField;
