/* eslint-disable no-unused-expressions */
import map from 'lodash/map';
import React, { FC, memo, useEffect, useRef } from 'react';
import Swiper from 'react-native-swiper';

import { WelcomeItem } from '../types';
import Welcome from '../Welcome';
import { Container } from './styles';

interface Props {
  index: number;
  onIndexChange(index: number): void;
  welcomeItems: WelcomeItem[];
}

const WelcomeSwiper: FC<Props> = ({ index, onIndexChange, welcomeItems }) => {
  const swiper = useRef<Swiper>(null);
  useEffect(() => {
    swiper.current?.scrollTo(index, true);
  }, [swiper.current, index]);
  return (
    <Container>
      <Swiper
        ref={swiper}
        loop={false}
        showsPagination={false}
        onIndexChanged={onIndexChange}
      >
        {map(welcomeItems, screen => (
          <Welcome welcomeItem={screen} key={screen.index} />
        ))}
      </Swiper>
    </Container>
  );
};

export default memo(WelcomeSwiper);
