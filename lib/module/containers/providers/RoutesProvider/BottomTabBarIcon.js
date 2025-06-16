import { AppEvent, event } from '../../../api';
import { Badge } from '../../../components';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useState } from 'react';
import { getBadges } from '../../../utils/notification';
import styled from '../../../utils/styled';
const BottomTabBarIcon = ({
  source,
  focused,
  size,
  showBadge
}) => {
  const [badges, setBadges] = useState([]);
  useEffect(() => {
    if (showBadge) {
      getBadges().then(notificationBadges => {
        setBadges(notificationBadges);
      });
      const notificationAdded = notificationBadges => {
        setBadges(notificationBadges);
      };
      event.on(AppEvent.OnNotificationBadge, notificationAdded);
      return function componentDidUnMount() {
        event.off(AppEvent.OnNotificationBadge, notificationAdded);
      };
    } else {
      return;
    }
  }, [showBadge]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, focused ? /*#__PURE__*/React.createElement(Icon, {
    source: source,
    size: size
  }) : /*#__PURE__*/React.createElement(InactiveIcon, {
    source: source,
    size: size
  }), showBadge && !isEmpty(badges) && /*#__PURE__*/React.createElement(Badge, {
    length: badges.length
  }));
};
BottomTabBarIcon.defaultProps = {
  size: 28
};
const Icon = styled.Image`
  width: ${({
  size
}) => `${size}px`};
  height: ${({
  size
}) => `${size}px`};
  tint-color: ${({
  theme
}) => theme.colors.highlight};
  margin-top: 5px;
`;
const InactiveIcon = styled.Image`
  width: ${({
  size
}) => `${size}px`};
  height: ${({
  size
}) => `${size}px`};
  tint-color: ${({
  theme
}) => theme.colors.dark};
  margin-top: 5px;
`;
export default BottomTabBarIcon;
//# sourceMappingURL=BottomTabBarIcon.js.map