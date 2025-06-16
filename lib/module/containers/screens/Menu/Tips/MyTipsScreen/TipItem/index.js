import { colors } from '../../../../../../assets';
import { IncidentCategoryImage } from '../../../../../../components';
import { IncidentType, sharedStrings, ViolationType } from 'incident-code-core';
import React from 'react';
import { useIntl } from 'react-intl';
import { useIncidentCategoryConfig } from '../../../../../../utils/hooks';
import { convertLocationToCoords, getIncidentDate } from '../../../../../../utils/location';
import { formatString } from '../../../../../../utils/string';
import MapSnapshot from '../MapSnapshot';
import messages from '../messages';
import { Container, InfoContainer, MapImage, MapOverlayAddress, MapOverlayContainer, MapOverlayTitle, MapSnapshotContainer, Marker, TextContainer, TextDescription, TextTitle, ViolationContainer, ViolationText } from './styles';
const TipItem = ({
  badges,
  incident
}) => {
  const {
    formatMessage
  } = useIntl();
  const category = useIncidentCategoryConfig(incident.category);
  const date = getIncidentDate(incident.createdAt);
  const renderInfo = () => {
    if (incident.isViolated) {
      const text = formatString(formatMessage(messages.violationInfo), {
        type: sharedStrings.violation_types[incident.violationType || ViolationType.WrongContent]
      });
      return /*#__PURE__*/React.createElement(ViolationContainer, {
        colors: colors.mapOverlay
      }, /*#__PURE__*/React.createElement(ViolationText, null, text));
    }
    const addressString = incident.address || formatMessage(messages.noAddress);
    const mapUrl = incident.mapUrl ? {
      uri: incident.mapUrl
    } : null;
    const coords = incident.location ? convertLocationToCoords(incident.location) : {
      latitude: 0,
      longitude: 0
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MapOverlayContainer, {
      colors: colors.mapOverlay
    }, /*#__PURE__*/React.createElement(MapOverlayTitle, {
      numberOfLines: 1,
      isClosed: incident.isResolved
    }, formatMessage(messages.address)), /*#__PURE__*/React.createElement(MapOverlayAddress, {
      numberOfLines: 2
    }, addressString)), mapUrl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MapImage, {
      source: mapUrl,
      isClosed: incident.isResolved
    }), /*#__PURE__*/React.createElement(Marker, {
      colors: incident.isResolved ? [colors.white, colors.white] : category.backgroundGradientColors
    })) : /*#__PURE__*/React.createElement(MapSnapshot, {
      coords: coords,
      gradientColor: category.backgroundGradientColors
    }));
  };
  const renderTitle = type => {
    switch (type) {
      case IncidentType.Escort:
        return formatMessage(messages.escort);
      case IncidentType.PassiveEscort:
        return formatMessage(messages.passiveEscort);
      default:
        return category.display;
    }
  };
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(InfoContainer, null, /*#__PURE__*/React.createElement(IncidentCategoryImage, {
    incidentType: incident.type,
    active: !incident.isResolved,
    category: incident.category,
    badges: badges,
    border: true
  }), /*#__PURE__*/React.createElement(TextContainer, null, /*#__PURE__*/React.createElement(TextTitle, {
    numberOfLines: 1
  }, renderTitle(incident.type)), /*#__PURE__*/React.createElement(TextDescription, {
    numberOfLines: 1
  }, date))), /*#__PURE__*/React.createElement(MapSnapshotContainer, null, renderInfo()));
};
export default TipItem;
//# sourceMappingURL=index.js.map