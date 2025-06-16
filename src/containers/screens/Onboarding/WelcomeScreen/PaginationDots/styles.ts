import styled from '../../../../../utils/styled';

export const Container : any = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Dot : any = styled.View<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.highlight : theme.colors.lightGrey};
`;
