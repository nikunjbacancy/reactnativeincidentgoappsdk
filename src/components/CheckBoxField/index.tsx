import { images } from '../../assets';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import CheckBox from 'react-native-check-box';
import styled from '../../utils/styled';

interface Props {
  name: string;
}

const CheckBoxField: FC<Props> = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  return (
    <CheckBox
      isChecked={field.value}
      onClick={() => setFieldValue(name as never, !field.value)}
      checkedImage={<CheckboxImage source={images.icCheckboxActive()} />}
      unCheckedImage={<CheckboxImage source={images.icCheckbox()} />}
    />
  );
};

const CheckboxImage = styled.Image`
  height: 30px;
  width: 30px;
`;

export default CheckBoxField;
