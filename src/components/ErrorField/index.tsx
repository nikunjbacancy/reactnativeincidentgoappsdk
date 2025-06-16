import { useField } from 'formik';
import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import styled from '../../utils/styled';

interface Props extends TextProps {
  name: string;
}

const ErrorField: FC<Props> = ({ name, ...rest }): any => {
  const [, meta] = useField(name);
  return (
    <>
      {meta.touched && meta.error ? <Text {...rest}>{meta.error}</Text> : null}
    </>
  );
};

const StyledErrorField : any = styled(ErrorField)`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.smallSize};
`;

export default StyledErrorField;
