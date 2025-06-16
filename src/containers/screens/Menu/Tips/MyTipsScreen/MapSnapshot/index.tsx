import { colors } from '../../../../../../assets';
import { Constants } from '../../../../../../components/Map';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import TipMarker from '../TipMarker';

const MAP_DELTAS = {
  latitudeDelta: 0.0057650618492886,
  longitudeDelta: 0.00398341566324234,
};

interface Props {
  coords: LatLng;
  gradientColor: string[];
}

const MapSnapshot: FC<Props> = ({ coords, gradientColor }) => (
  <MapView
    provider={PROVIDER_GOOGLE}
    initialRegion={{
      ...coords,
      ...MAP_DELTAS,
    }}
    zoomEnabled={false}
    rotateEnabled={false}
    scrollEnabled={false}
    style={{
      ...StyleSheet.absoluteFillObject,
      bottom: -30,
      zIndex: 1,
    }}
    customMapStyle={Constants.CUSTOM_MAP_STYLE}
    loadingEnabled
    loadingIndicatorColor={colors.light}
    loadingBackgroundColor={colors.grey}
    liteMode
  >
    <Marker coordinate={coords}>
      <TipMarker colors={gradientColor} />
    </Marker>
  </MapView>
);

export default MapSnapshot;
