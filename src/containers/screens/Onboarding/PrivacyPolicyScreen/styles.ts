
import styled from '../../../../utils/styled';

export const MainView : any = styled.View`
  flex: 1;
`;

export const BackButtonCol : any = styled.View`
  position: absolute;
  left: 20px;
  background: ${({ theme }) => theme.colors.white};
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
`;

export const BackButtonView : any = styled.View`
  flex: 0.8;
  margin-top: 10px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
`;

export const WebViewStyle : any = styled.View`
  flex: 9.2;
  padding-horizontal: 10px;
  padding-bottom: 10px;
  background: ${({ theme }) => theme.colors.white};
`;
