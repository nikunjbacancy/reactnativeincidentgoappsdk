/* eslint-disable no-unused-expressions */
import { colors } from '../../../../../../assets';
import { LoadingIndicator } from '../../../../../../components';
import { Constants } from '../../../../../../components/Map';
import TipMarker from '../../../../../../containers/screens/Menu/Tips/MyTipsScreen/TipMarker';
import React, { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { Location } from 'react-native-background-geolocation';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styled from '../../../../../../utils/styled';

const MAP_DELTAS = {
  latitudeDelta: 0.0057650618492886,
  longitudeDelta: 0.00398341566324234,
};

interface Props {
  location?: Location;
}

const RecordAudio: FC<Props> = ({ location }) => {
  if (!location) return <Loading />;

  const [mapReady, setMapReady] = useState(false);

  const latLng: LatLng = useMemo(
    () => ({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    }),
    [location],
  );

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (mapReady) {
      mapRef.current?.animateToRegion(
        {
          ...latLng,
          ...MAP_DELTAS,
        },
        300,
      );
    }
  }, [latLng]);

  return (
    <>
      <Map
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          ...latLng,
          ...MAP_DELTAS,
        }}
        zoomEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        customMapStyle={Constants.CUSTOM_MAP_STYLE}
        loadingEnabled
        loadingIndicatorColor={colors.light}
        loadingBackgroundColor={colors.grey}
        onMapReady={() => setMapReady(true)}
      >
        <Marker coordinate={latLng}>
          <TipMarker colors={[colors.highlight, colors.highlight]} />
        </Marker>
      </Map>
    </>
  );
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

export default memo(RecordAudio);
