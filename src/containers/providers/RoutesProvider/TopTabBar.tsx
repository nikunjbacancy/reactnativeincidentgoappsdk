/* eslint-disable react/jsx-props-no-spreading */
import { Header } from '../../../components';
import React, { FC } from 'react';
import { MaterialTopTabBar } from 'react-navigation-tabs';
import styled from '../../../utils/styled';

const TopTabBar: FC<any> = props => {
  return (
    <>
      <Header title="My tips" />
      <StyledTopTabBar {...props} />
    </>
  );
};

const StyledTopTabBar = styled(MaterialTopTabBar)`
  background-color: ${({ theme }) => theme.sdkBackgroundColor};
  margin-bottom: 25px;
`;

export default TopTabBar;
