import { images } from '../../assets';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import CheckBox from 'react-native-check-box';
import styled from '../../utils/styled';
const CheckBoxField = ({
  name
}) => {
  const {
    setFieldValue
  } = useFormikContext();
  const [field] = useField(name);
  return /*#__PURE__*/React.createElement(CheckBox, {
    isChecked: field.value,
    onClick: () => setFieldValue(name, !field.value),
    checkedImage: /*#__PURE__*/React.createElement(CheckboxImage, {
      source: images.icCheckboxActive()
    }),
    unCheckedImage: /*#__PURE__*/React.createElement(CheckboxImage, {
      source: images.icCheckbox()
    })
  });
};
const CheckboxImage = styled.Image`
  height: 30px;
  width: 30px;
`;
export default CheckBoxField;
//# sourceMappingURL=index.js.map