import { images } from '../../../../../../assets';
import {
  GradientButton,
  IncidentCategoryImage,
  LoadingIndicator,
} from '../../../../../../components';
import IconButton from '../../../../../../components/IconButton';
import {
  InfoContainer,
  TextContainer,
  TextDescription,
  TextTitle,
} from '../../../../../../containers/screens/Menu/Tips/MyTipsScreen/TipItem/styles';
import { Incident, Organization } from 'incident-code-core';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { getIncidentDate } from '../../../../../../utils/location';
import styled from '../../../../../../utils/styled';

import messages from '../messages';

interface Props {
  isVisible: boolean;
  hideModal(): void;
  incident?: Incident;
  organization?: Organization;
  onOpen(): void;
}

const FastAccessModal: FC<Props> = ({
  isVisible,
  hideModal,
  incident,
  organization,
  onOpen,
}) => {
  const { formatMessage } = useIntl();
  const date = getIncidentDate(incident?.createdAt);
  return (
    <>
      {isVisible && (
        <Container>
          {incident && organization ? (
            <>
              <CloseButton source={images.icClose()} onPress={hideModal} />
              <TitleContainer>
                <TitleBold>{formatMessage(messages.fastAccess)}</TitleBold>
                <Title>{formatMessage(messages.fastAccessRest)}</Title>
              </TitleContainer>
              <InfoContainer>
                <IncidentCategoryImage
                  incidentType={incident.type}
                  active={!incident.isResolved}
                  category={incident.category}
                  border
                />
                <TextContainer>
                  <TextTitle numberOfLines={1}>{organization?.name}</TextTitle>
                  <TextDescription numberOfLines={1}>{date}</TextDescription>
                </TextContainer>
                <OpenButton
                  onPress={onOpen}
                  text={formatMessage(messages.open)}
                />
              </InfoContainer>
            </>
          ) : (
            <LoadingIndicator />
          )}
        </Container>
      )}
    </>
  );
};

const Container = styled.View`
  border-radius: 17px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 26%;
  left: 0;
  right: 0;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: auto;
`;

const TitleBold = styled.Text`
  font-weight: bold;
`;

const Title = styled.Text``;

const CloseButton = styled(IconButton as any).attrs(({ theme }) => ({
  tintColor: theme.colors.lightGrey,
}))`
  width: 44px;
  height: 44px;
  position: absolute;
  right: 0;
`;

const OpenButton = styled(GradientButton)`
  width: 64px;
  height: 42px;
  border-radius: 13px;
  margin-left: auto;
  margin-top: auto;
`;

export default FastAccessModal;
