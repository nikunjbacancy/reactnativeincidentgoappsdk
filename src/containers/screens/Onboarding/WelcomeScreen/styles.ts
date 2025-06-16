import { images } from '../../../../assets';
import { GradientButton } from '../../../../components';
import { Image } from 'react-native';
import styled from '../../../../utils/styled';

export const Background : any = styled(Image).attrs({
  source: images.backgroundWhite(),
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const PaginationRow : any = styled.View`
  margin-top: auto;
  margin-bottom: 20px;
`;

export const BottomNav : any = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 30px;
  background: ${({ theme }) => theme.sdkBackgroundColor};
`;

export const SkipButton : any = styled(GradientButton)`
  width: 75%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.highlight};
`;

export const NextButton : any = styled(GradientButton).attrs({
  image: images.icLinkArrow(),
})`
  width: 20%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
