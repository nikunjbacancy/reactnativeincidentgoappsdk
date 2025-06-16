import { images } from '../../assets';
import React, { FC } from 'react';
import { SafeAreaView, ViewStyle, StyleProp, TouchableHighlight } from 'react-native';
import styled from '../../utils/styled';
import {
  Menu,
  MenuOption,
  MenuOptionCustomStyle,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import colors from '../../assets/colors';

interface Props {
  title: string;
  onButtonClick: any;
  uneadNotification: number
}

const icon = {
  width: 22,
  height: 32,
};

interface MenuOptionsStyleProps extends MenuOptionCustomStyle {
  optionsContainer?: StyleProp<ViewStyle>;
  OptionTouchableComponent: typeof TouchableHighlight;
}


const HeaderWithButton: FC<Props> = ({ title, onButtonClick, uneadNotification }) => {
  return (
    <SafeAreaView>
      <HeaderRow>
        <Logo source={images.logo()} />
        <TitleText>{title}</TitleText>
        <EmptySpace></EmptySpace>
        {uneadNotification > 0 &&
          <MenuContainer>
            <MenuTrigger>
              <HamburgerMenu source={images.more()} />
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
              <MenuOption
                onSelect={() =>
                  onButtonClick()
                }>
                <MenuOptionInner>
                  <MenuOptionText>
                    Mark as Read All
                  </MenuOptionText>
                </MenuOptionInner>
              </MenuOption>
            </MenuOptions>
          </MenuContainer>}

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
  flex:1
`;

const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.extraLargeSize};
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;


export const MenuContainer = styled(Menu)`
  
  background-color: ${({ theme }) => theme.colors.transparent};
  border-left-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const MenuOptionInner = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const MenuOptionText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const MenuOptionIcon = styled.Image`
  margin-left: auto;
`;

export const HamburgerMenu = styled.Image`
  width: 22px;
  height: 22px;
`;

export default styled(HeaderWithButton)`
  margin-top: 20px;
`;

const optionsStyles: MenuOptionsStyleProps = {
  optionsContainer: {
    backgroundColor: colors.nearWhite,
    width: 'auto',
    flexDirection: 'row-reverse',
    marginTop: 25,

  },
  optionWrapper: {
    width: 200,
    padding: 0,
    margin: 0,
    marginRight: -30,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  OptionTouchableComponent: TouchableHighlight,
};