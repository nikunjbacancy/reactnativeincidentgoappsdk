import map from 'lodash/map';
import React, { useMemo, useState } from 'react';
import styled from '../../../utils/styled';
import { splitVideosOnPages } from '../../../utils/video';
import VideoCard from '../VideoCard';
const VideoList = ({
  incidentVideos
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const videoPages = useMemo(() => splitVideosOnPages(incidentVideos), [incidentVideos]);
  const activePage = videoPages[currentPage];
  if (!activePage) {
    return null;
  }
  const onNextPage = () => {
    const isLastPage = currentPage + 1 === videoPages.length;
    setCurrentPage(isLastPage ? 0 : currentPage + 1);
  };
  return /*#__PURE__*/React.createElement(Container, null, map(activePage, ({
    id,
    duration,
    thumbnailUrl,
    text
  }, index) => /*#__PURE__*/React.createElement(VideoCard, {
    id: id,
    videoPages: videoPages,
    currentPage: currentPage,
    duration: duration,
    thumbnailUrl: thumbnailUrl,
    text: text,
    navigateClick: onNextPage,
    key: index
  })));
};
const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70px;
  height: 90px;
  padding-left: 23px;
  padding-right: 23px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: center;
`;
export default VideoList;
//# sourceMappingURL=index.js.map