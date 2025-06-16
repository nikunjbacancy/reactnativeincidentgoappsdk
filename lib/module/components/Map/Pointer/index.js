import { colors } from '../../../assets';
import React from 'react';
import { Platform } from 'react-native';
import styled from '../../../utils/styled';
const POINTER_PARAMS = {
  width: Platform.OS === 'android' ? 10 : 16,
  height: Platform.OS === 'android' ? 12 : 8,
  color: colors.grey
};
const defaultTranslateX = Platform.OS === 'android' ? `-12px` : `-${POINTER_PARAMS.width / 2}px`;
const defaultPointerHeight = Platform.OS === 'android' ? `${POINTER_PARAMS.width}px` : `${POINTER_PARAMS.height}px`;
const Pointer = ({
  color,
  width,
  height
}) => {
  return /*#__PURE__*/React.createElement(PointerContainer, {
    height: height
  }, /*#__PURE__*/React.createElement(PointerView, {
    color: color,
    height: height,
    width: width
  }));
};
const PointerContainer = styled.View`
  background-color: ${({
  theme
}) => theme.colors.transparent};
  height: ${({
  height
}) => height ? `${height}px` : defaultPointerHeight};
`;
const PointerView = styled.View`
  position: relative;
  transform: translateX(
    ${({
  width
}) => width ? `-${width / 2}px` : defaultTranslateX}
  );
  left: 50%;
  width: 0;
  height: 0;
  border-top-width: ${({
  width
}) => width ? `${width}px` : `${POINTER_PARAMS.width}px`};
  border-left-width: ${({
  height
}) => height ? `${height}px` : `${POINTER_PARAMS.height}px`};
  border-right-width: ${({
  height
}) => height ? `${height}px` : `${POINTER_PARAMS.height}px`};
  border-top-color: ${({
  theme,
  color
}) => color || theme.colors.grey};
  border-left-color: ${({
  theme
}) => theme.colors.transparent};
  border-right-color: ${({
  theme
}) => theme.colors.transparent};
`;
export default Pointer;
//# sourceMappingURL=index.js.map