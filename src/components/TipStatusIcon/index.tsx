import React, { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import styled from '../../utils/styled';

interface Props {
  style?: ViewStyle;
  label?: string;
}

const TipStatusIcon: FC<Props> = ({ style, label }) => {
  return (
    <TipStatusContainer>
      <View style={style} />
      {label && <TabStatusLabel> {label}</TabStatusLabel>}
    </TipStatusContainer>
  );
};

const TipStatusContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TabStatusLabel = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

export default styled(TipStatusIcon)<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({ active, theme: { colors } }) =>
    active ? colors.green : colors.highlight2};
`;
