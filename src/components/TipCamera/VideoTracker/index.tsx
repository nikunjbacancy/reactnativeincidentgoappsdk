/* eslint-disable no-unused-expressions */
import { images } from '../../../assets';
import { IncidentVideo } from 'incident-code-core';
import map from 'lodash/map';
import React, { FC, memo, useEffect, useRef } from 'react';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from '../../../utils/styled';

import {
  THUMBNAIL_MARGIN_RIGHT,
  THUMBNAIL_WIDTH,
  TRACKER_WIDTH,
} from '../constants';

type Props = {
  trackerY: number;
  videoIndex: number;
  videos: IncidentVideo[];
  onVideoSelected: (index: number) => void;
};

const VideoTracker: FC<Props> = ({
  trackerY,
  videoIndex,
  videos,
  onVideoSelected,
}) => {
  const listContainerRef = useRef<ScrollView | null>(null);

  useEffect(() => {
    listContainerRef.current?.scrollTo({
      x: (THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * videoIndex,
      y: 0,
    });
  }, [videoIndex]);

  const renderImage = (video: IncidentVideo, index: number) => (
    <ThumbnailContainer
      key={video.id?.toString()}
      onPress={() => onVideoSelected(index)}
      width={THUMBNAIL_WIDTH}
      marginRight={THUMBNAIL_MARGIN_RIGHT}
    >
      <Thumbnail source={{ uri: video.thumbnailUrl }} width={THUMBNAIL_WIDTH} />
    </ThumbnailContainer>
  );

  const renderTracker = (): React.ReactElement => (
    <TrackerContainer left={trackerY} width={TRACKER_WIDTH}>
      <TrackerThumbOverlay>
        <TrackerImage source={images.icSliderTrack()} />
      </TrackerThumbOverlay>
    </TrackerContainer>
  );

  return (
    <Container>
      <ListContainer
        ref={() => listContainerRef}
        showsVerticalScrollIndicator={false}
        horizontal
      >
        {map(videos, renderImage)}
        {renderTracker()}
      </ListContainer>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  height: 90px;
  justify-content: space-between;
`;

const ListContainer = styled.ScrollView`
  position: relative;
  height: 90px;
  width: 100%;
`;

const TrackerContainer = styled.View<{ left: number; width: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ left }) => left || 0}px;
  width: ${({ width }) => width || 16}px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const TrackerThumbOverlay = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.trackThumbOverlay,
}))`
  flex: 1;
`;

const TrackerImage = styled.Image`
  position: absolute;
  top: 49%;
  left: -32px;
  width: 80px;
  height: 3px;
  z-index: 10000;
  transform: rotate(90deg);
`;

const ThumbnailContainer = styled.TouchableOpacity<{
  width: number;
  marginRight: number;
}>`
  width: ${({ width }) => width || 63}px;
  height: 90px;
  border-radius: 8px;
  margin-right: ${({ marginRight }) => marginRight || 6}px;
  overflow: hidden;
`;

const Thumbnail = styled.Image<{ width: number }>`
  width: ${({ width }) => width || 78}px;
  height: 90px;
  resize-mode: cover;
`;

export default memo(VideoTracker);
