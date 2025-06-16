import { images } from '../../assets';
import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import styled from '../../utils/styled';

interface Props {
  title: string;
}

const icon = {
  width: 22,
  height: 32,
};

const Header: FC<Props> = ({ title }) => {
  return (
    <SafeAreaView>
      <HeaderRow>
        <Logo source={images.logo()} />
        <TitleText>{title}</TitleText>
        <EmptySpace />
      </HeaderRow>
    </SafeAreaView>
  );
};

const HeaderRow = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  
`;

const Logo = styled.Image`
  width: ${icon.width}px;
  height: ${icon.height}px;
  tint-color: ${({ theme }) => theme.colors.dark};
`;

const EmptySpace = styled.View`
  width: ${icon.width}px;
  height: ${icon.height}px;
`;

const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.extraLargeSize};
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

export default styled(Header)`
  margin-top: 20px;
`;
