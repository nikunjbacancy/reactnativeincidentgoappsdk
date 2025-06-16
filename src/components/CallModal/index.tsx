import { images } from '../../assets';
import { Organization } from 'incident-code-core';
import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { makeCall } from '../../utils/device';
import styled from '../../utils/styled';

import GradientButton from '../GradientButton';
import IconButton from '../IconButton';
import messages from './messages';

interface Props {
  isVisible: boolean;
  onShow?(): void;
  onHide?(): void;
  hideModal(): void;
  organization?: Organization;
  organizations?: Organization[];
}

const CallModal: FC<Props> = ({
  isVisible,
  onShow,
  onHide,
  hideModal,
  organization,
  organizations,
}) => {
  const { formatMessage } = useIntl();
  const renderItem = (itemInfo: { item: Organization | undefined }) => (
    <OrganizationButton
      onPress={() => makeCall(itemInfo.item?.phone)}
      text={itemInfo.item?.name}
    />
  );
  const call911 = async () => {
    await makeCall('911');
  };
  return (
    <Modal
      useNativeDriver={true}
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      onModalWillShow={onShow}
      onModalWillHide={onHide}
    >
      <Container>
        <CloseButton onPress={hideModal} source={images.icClose()} />
        <Content>
          <Title>{formatMessage(messages.wantCall)}</Title>
          <SubTitle>{formatMessage(messages.emergency)}</SubTitle>
          <EmergencyButton
            onPress={call911}
            text={formatMessage(messages.call911)}
          />
        </Content>
        <ListContainer>
          <SubTitle>{formatMessage(messages.organization)}</SubTitle>
          {organizations ? (
            <List
              keyExtractor={org => org.id?.toString() || ''}
              renderItem={renderItem}
              data={organizations}
            />
          ) : (
            <>{renderItem({ item: organization })}</>
          )}
        </ListContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  border-radius: 5px;
  height: 75%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 0;
  position: relative;
`;

const Content = styled.View`
  margin-bottom: 10px;
`;

const ListContainer = styled.View`
  height: 70%;
  margin-bottom: auto;
`;

const CloseButton = styled(IconButton as any)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: -60px;
  right: 20px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 28px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

const EmergencyButton = styled(GradientButton)`
  margin-top: 10px;
`;

const OrganizationButton = styled(GradientButton)`
  margin-top: 10px;
`;

export const List = styled(FlatList as new () => FlatList<Organization>)`
  margin-bottom: 20px;
`;

export default memo(CallModal);
