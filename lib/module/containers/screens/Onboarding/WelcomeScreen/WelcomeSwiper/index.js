/* eslint-disable no-unused-expressions */
import map from 'lodash/map';
import React, { memo, useEffect, useRef } from 'react';
import Swiper from 'react-native-swiper';
import Welcome from '../Welcome';
import { Container } from './styles';
const WelcomeSwiper = ({
  index,
  onIndexChange,
  welcomeItems
}) => {
  const swiper = useRef(null);
  useEffect(() => {
    var _swiper$current;
    (_swiper$current = swiper.current) === null || _swiper$current === void 0 || _swiper$current.scrollTo(index, true);
  }, [swiper.current, index]);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Swiper, {
    ref: swiper,
    loop: false,
    showsPagination: false,
    onIndexChanged: onIndexChange
  }, map(welcomeItems, screen => /*#__PURE__*/React.createElement(Welcome, {
    welcomeItem: screen,
    key: screen.index
  }))));
};
export default /*#__PURE__*/memo(WelcomeSwiper);
//# sourceMappingURL=index.js.map