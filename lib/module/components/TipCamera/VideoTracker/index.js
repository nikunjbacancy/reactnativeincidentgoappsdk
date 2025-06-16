/* eslint-disable no-unused-expressions */
import { images } from '../../../assets';
import map from 'lodash/map';
import React, { memo, useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from '../../../utils/styled';
import { THUMBNAIL_MARGIN_RIGHT, THUMBNAIL_WIDTH, TRACKER_WIDTH } from '../constants';
const VideoTracker = ({
  trackerY,
  videoIndex,
  videos,
  onVideoSelected
}) => {
  const listContainerRef = useRef(null);
  useEffect(() => {
    var _listContainerRef$cur;
    (_listContainerRef$cur = listContainerRef.current) === null || _listContainerRef$cur === void 0 || _listContainerRef$cur.scrollTo({
      x: (THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * videoIndex,
      y: 0
    });
  }, [videoIndex]);
  const renderImage = (video, index) => {
    var _video$id;
    return /*#__PURE__*/React.createElement(ThumbnailContainer, {
      key: (_video$id = video.id) === null || _video$id === void 0 ? void 0 : _video$id.toString(),
      onPress: () => onVideoSelected(index),
      width: THUMBNAIL_WIDTH,
      marginRight: THUMBNAIL_MARGIN_RIGHT
    }, /*#__PURE__*/React.createElement(Thumbnail, {
      source: {
        uri: video.thumbnailUrl
      },
      width: THUMBNAIL_WIDTH
    }));
  };
  const renderTracker = () => /*#__PURE__*/React.createElement(TrackerContainer, {
    left: trackerY,
    width: TRACKER_WIDTH
  }, /*#__PURE__*/React.createElement(TrackerThumbOverlay, null, /*#__PURE__*/React.createElement(TrackerImage, {
    source: images.icSliderTrack()
  })));
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ListContainer, {
    ref: () => listContainerRef,
    showsVerticalScrollIndicator: false,
    horizontal: true
  }, map(videos, renderImage), renderTracker()));
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
const TrackerContainer = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({
  left
}) => left || 0}px;
  width: ${({
  width
}) => width || 16}px;
  background-color: rgba(0, 0, 0, 0.4);
`;
const TrackerThumbOverlay = styled(LinearGradient).attrs(({
  theme
}) => ({
  colors: theme.colors.trackThumbOverlay
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
const ThumbnailContainer = styled.TouchableOpacity`
  width: ${({
  width
}) => width || 63}px;
  height: 90px;
  border-radius: 8px;
  margin-right: ${({
  marginRight
}) => marginRight || 6}px;
  overflow: hidden;
`;
const Thumbnail = styled.Image`
  width: ${({
  width
}) => width || 78}px;
  height: 90px;
  resize-mode: cover;
`;
export default /*#__PURE__*/memo(VideoTracker);
//# sourceMappingURL=index.js.map