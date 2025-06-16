/* eslint-disable react/jsx-props-no-spreading */
import { Header } from '../../../components';
import React from 'react';
import { MaterialTopTabBar } from 'react-navigation-tabs';
import styled from '../../../utils/styled';
const TopTabBar = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: "My tips"
  }), /*#__PURE__*/React.createElement(StyledTopTabBar, props));
};
const StyledTopTabBar = styled(MaterialTopTabBar)`
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
  margin-bottom: 25px;
`;
export default TopTabBar;
//# sourceMappingURL=TopTabBar.js.map