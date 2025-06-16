import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import styled from '../../utils/styled';

import GradientButton, { GradientButtonProps } from '../GradientButton';

interface Props extends GradientButtonProps {
  disabledWhenNot?: string;
  submitWhenFormIsValid?: boolean;
}

const SubmitButtonField: FC<Props> = ({
  submitWhenFormIsValid,
  disabledWhenNot = '',
  ...rest
}) => {
  const { handleSubmit, isValid } = useFormikContext();
  const [field] = useField(disabledWhenNot.toString());
  return (
    <SubmitButton
      disabled={submitWhenFormIsValid ? !isValid : !field.value}
      onPress={() => handleSubmit()}
      {...rest}
    />
  );
};

const SubmitButton = styled(GradientButton)`
  background-color: ${({ theme }) => theme.colors.highlight};
`;

export default SubmitButtonField;
