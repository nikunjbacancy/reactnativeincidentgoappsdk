import { AppEvent, event } from '../../../api';
import { Badge } from '../../../components';
import { Id } from 'incident-code-core';
import isEmpty from 'lodash/isEmpty';
import React, { FC, useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { getBadges } from '../../../utils/notification';
import styled from '../../../utils/styled';

interface Props {
  source: ImageSourcePropType;
  focused?: boolean;
  size?: number;
  showBadge?: boolean;
}

const BottomTabBarIcon: FC<Props> = ({ source, focused, size, showBadge }) => {
  const [badges, setBadges] = useState<Id[]>([]);
  useEffect(() => {
    if (showBadge) {
      getBadges().then((notificationBadges: Id[]) => {
        setBadges(notificationBadges);
      });
      const notificationAdded = (notificationBadges: Id[]) => {
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
  return (
    <>
      {focused ? (
        <Icon source={source} size={size} />
      ) : (
        <InactiveIcon source={source} size={size} />
      )}
      {showBadge && !isEmpty(badges) && <Badge length={badges.length} />}
    </>
  );
};

BottomTabBarIcon.defaultProps = {
  size: 28,
};

const Icon = styled.Image<Props>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  tint-color: ${({ theme }) => theme.colors.highlight};
  margin-top: 5px;
`;

const InactiveIcon = styled.Image<Props>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  tint-color: ${({ theme }) => theme.colors.dark};
  margin-top: 5px;
`;

export default BottomTabBarIcon;
