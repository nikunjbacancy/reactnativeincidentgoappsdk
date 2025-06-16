import { colors } from '../../../../../../assets';
import { Constants } from '../../../../../../components/Map';
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import TipMarker from '../TipMarker';
const MAP_DELTAS = {
  latitudeDelta: 0.0057650618492886,
  longitudeDelta: 0.00398341566324234
};
const MapSnapshot = ({
  coords,
  gradientColor
}) => /*#__PURE__*/React.createElement(MapView, {
  provider: PROVIDER_GOOGLE,
  initialRegion: {
    ...coords,
    ...MAP_DELTAS
  },
  zoomEnabled: false,
  rotateEnabled: false,
  scrollEnabled: false,
  style: {
    ...StyleSheet.absoluteFillObject,
    bottom: -30,
    zIndex: 1
  },
  customMapStyle: Constants.CUSTOM_MAP_STYLE,
  loadingEnabled: true,
  loadingIndicatorColor: colors.light,
  loadingBackgroundColor: colors.grey,
  liteMode: true
}, /*#__PURE__*/React.createElement(Marker, {
  coordinate: coords
}, /*#__PURE__*/React.createElement(TipMarker, {
  colors: gradientColor
})));
export default MapSnapshot;
//# sourceMappingURL=index.js.map