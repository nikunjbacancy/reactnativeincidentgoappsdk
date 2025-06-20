import { images } from '../../assets';
import isString from 'lodash/isString';
import React, { FC } from 'react';
import Modal from 'react-native-modal';
import styled from '../../utils/styled';
import IconButton from '../IconButton';
import { ScrollView } from 'react-native';
import GradientButton from '../GradientButton';

export enum ScreenActionModalType {
  Success = 'Success',
  Error = 'Error',
}

interface Props {
  type?: ScreenActionModalType;
  isVisible: boolean;
  title: string;
  message: string | JSX.Element;
  actionText: string;
  onAction(): void;
  onHide(): void;
  showSuccessIcon?: boolean;
  showActionIcon?: boolean;

}

const TipCreatedModal: FC<Props> = ({
  type = ScreenActionModalType.Success,
  isVisible,
  title,
  message,
  actionText,
  onAction,
  onHide,
  showSuccessIcon = true,

}) => {
  const icon =
    type === ScreenActionModalType.Success
      ? images.icSuccess()
      : images.icError();

  return (
    <Modal
      useNativeDriver
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisible}
      onBackButtonPress={onHide}
      onBackdropPress={onHide}
      style={{flex:1,paddingVertical:50}}
    >
      {showSuccessIcon ? <Container>
        <CloseButton source={images.icClose()} onPress={onHide} />
        <SuccessIcon source={icon} />
        <Title>{title}</Title>
        <MessageRow>
          {isString(message) ? <Message>{message}</Message> : <>{message}</>}
        </MessageRow>
        <ActionButton text={actionText} onPress={onAction} />
      </Container> :
        <DetailContainer>
          <CloseButton source={images.icClose()} onPress={onHide} />
          <Title>{title}</Title>
          <ScrollView><TextBody>{message}</TextBody></ScrollView>
        </DetailContainer>
      }
    </Modal>
  );
};

const Container = styled.View`
  align-items: center;
  border-radius: 20px;
  height: 380px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 30px;
`;

const DetailContainer = styled.SafeAreaView`
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 30px 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SuccessIcon = styled.Image`
  margin-top: 30px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: ${({ theme }) => theme.fonts.titleSize};
  color: ${({ theme }) => theme.colors.dark};
  margin: 20px 0;
  text-align: center;
`;

const MessageRow = styled.View`
  flex: 1;
`;

const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;
const TextBody = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  padding: 10px 10px;
  padding-top:0;
`;

const ActionButton = styled(GradientButton)`
  margin: 10px auto 20px;
  width: 200px;
`;

const CloseButton = styled(IconButton as any)`
  width: 50px;
  height: 50px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 0px;
`;



export default TipCreatedModal;
