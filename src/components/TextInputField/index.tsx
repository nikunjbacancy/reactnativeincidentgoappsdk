import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  name: string;
}

const TextInputField: FC<Props> = ({ name, ...rest }) => {
  const { handleBlur, handleChange } = useFormikContext();
  const [field] = useField(name);
  return (
    <>
      <TextInput
        onChangeText={handleChange(name) as any}
        onBlur={handleBlur(name) as any}
        value={field.value}
        {...rest}
      />
    </>
  );
};

export default TextInputField;
