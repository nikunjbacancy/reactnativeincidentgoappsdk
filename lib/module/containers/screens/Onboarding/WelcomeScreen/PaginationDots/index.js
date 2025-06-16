import map from 'lodash/map';
import times from 'lodash/times';
import React from 'react';
import { Container, Dot } from './styles';
const PaginationDots = ({
  size,
  currentPage
}) => /*#__PURE__*/React.createElement(Container, null, map(times(size), index => /*#__PURE__*/React.createElement(Dot, {
  isActive: index === currentPage,
  key: index
})));
export default PaginationDots;
//# sourceMappingURL=index.js.map