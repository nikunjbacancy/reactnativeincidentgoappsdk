import map from 'lodash/map';
import times from 'lodash/times';
import React, { FC } from 'react';

import { Container, Dot } from './styles';

interface Props {
  size: number;
  currentPage: number;
}

const PaginationDots: FC<Props> = ({ size, currentPage }) => (
  <Container>
    {map(times(size), index => (
      <Dot isActive={index === currentPage} key={index} />
    ))}
  </Container>
);

export default PaginationDots;
