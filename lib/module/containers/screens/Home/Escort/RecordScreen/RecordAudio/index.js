/* eslint-disable no-unused-expressions */
import { colors } from '../../../../../../assets';
import { LoadingIndicator } from '../../../../../../components';
import { Constants } from '../../../../../../components/Map';
import TipMarker from '../../../../../../containers/screens/Menu/Tips/MyTipsScreen/TipMarker';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styled from '../../../../../../utils/styled';
const MAP_DELTAS = {
  latitudeDelta: 0.0057650618492886,
  longitudeDelta: 0.00398341566324234
};
const RecordAudio = ({
  location
}) => {
  if (!location) return /*#__PURE__*/React.createElement(Loading, null);
  const [mapReady, setMapReady] = useState(false);
  const latLng = useMemo(() => ({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }), [location]);
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapReady) {
      var _mapRef$current;
      (_mapRef$current = mapRef.current) === null || _mapRef$current === void 0 || _mapRef$current.animateToRegion({
        ...latLng,
        ...MAP_DELTAS
      }, 300);
    }
  }, [latLng]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Map, {
    ref: mapRef,
    provider: PROVIDER_GOOGLE,
    initialRegion: {
      ...latLng,
      ...MAP_DELTAS
    },
    zoomEnabled: false,
    rotateEnabled: false,
    scrollEnabled: false,
    customMapStyle: Constants.CUSTOM_MAP_STYLE,
    loadingEnabled: true,
    loadingIndicatorColor: colors.light,
    loadingBackgroundColor: colors.grey,
    onMapReady: () => setMapReady(true)
  }, /*#__PURE__*/React.createElement(Marker, {
    coordinate: latLng
  }, /*#__PURE__*/React.createElement(TipMarker, {
    colors: [colors.highlight, colors.highlight]
  }))));
};
const Map = styled(MapView)`
  min-height: 105%;
  height: 105%;
  width: 100%;
`;
const Loading = styled(LoadingIndicator)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export default /*#__PURE__*/memo(RecordAudio);
//# sourceMappingURL=index.js.map