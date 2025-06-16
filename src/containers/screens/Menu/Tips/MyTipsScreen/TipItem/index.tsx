import { colors } from '../../../../../../assets';
import { IncidentCategoryImage } from '../../../../../../components';
import {
  Id,
  Incident,
  IncidentType,
  sharedStrings,
  ViolationType,
} from 'incident-code-core';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { useIncidentCategoryConfig } from '../../../../../../utils/hooks';
import { convertLocationToCoords, getIncidentDate } from '../../../../../../utils/location';
import { formatString } from '../../../../../../utils/string';

import MapSnapshot from '../MapSnapshot';
import messages from '../messages';
import {
  Container,
  InfoContainer,
  MapImage,
  MapOverlayAddress,
  MapOverlayContainer,
  MapOverlayTitle,
  MapSnapshotContainer,
  Marker,
  TextContainer,
  TextDescription,
  TextTitle,
  ViolationContainer,
  ViolationText,
} from './styles';

interface Props {
  incident: Incident;
  badges: Id[];
}

const TipItem: FC<Props> = ({ badges, incident }) => {
  const { formatMessage } = useIntl();
  const category = useIncidentCategoryConfig(incident.category);
  const date = getIncidentDate(incident.createdAt);

  const renderInfo = () => {
    if (incident.isViolated) {
      const text = formatString(formatMessage(messages.violationInfo), {
        type:
          sharedStrings.violation_types[
            incident.violationType || ViolationType.WrongContent
          ],
      });
      return (
        <ViolationContainer colors={colors.mapOverlay}>
          <ViolationText>{text}</ViolationText>
        </ViolationContainer>
      );
    }
    const addressString = incident.address || formatMessage(messages.noAddress);
    const mapUrl = incident.mapUrl ? { uri: incident.mapUrl } : null;
    const coords = incident.location
      ? convertLocationToCoords(incident.location)
      : { latitude: 0, longitude: 0 };
    return (
      <>
        <MapOverlayContainer colors={colors.mapOverlay}>
          <MapOverlayTitle numberOfLines={1} isClosed={incident.isResolved}>
            {formatMessage(messages.address)}
          </MapOverlayTitle>
          <MapOverlayAddress numberOfLines={2}>
            {addressString}
          </MapOverlayAddress>
        </MapOverlayContainer>
        {mapUrl ? (
          <>
            <MapImage source={mapUrl} isClosed={incident.isResolved} />
            <Marker
              colors={
                incident.isResolved
                  ? [colors.white, colors.white]
                  : category.backgroundGradientColors
              }
            />
          </>
        ) : (
          <MapSnapshot
            coords={coords}
            gradientColor={category.backgroundGradientColors}
          />
        )}
      </>
    );
  };

  const renderTitle = (type: IncidentType) => {
    switch (type) {
      case IncidentType.Escort:
        return formatMessage(messages.escort);
      case IncidentType.PassiveEscort:
        return formatMessage(messages.passiveEscort);
      default:
        return category.display;
    }
  };

  return (
    <Container>
      <InfoContainer>
        <IncidentCategoryImage
          incidentType={incident.type}
          active={!incident.isResolved}
          category={incident.category}
          badges={badges}
          border
        />
        <TextContainer>
          <TextTitle numberOfLines={1}>{renderTitle(incident.type)}</TextTitle>
          <TextDescription numberOfLines={1}>{date}</TextDescription>
        </TextContainer>
      </InfoContainer>
      <MapSnapshotContainer>{renderInfo()}</MapSnapshotContainer>
    </Container>
  );
};

export default TipItem;
