import { IncidentVideo } from 'incident-code-core';
import map from 'lodash/map';
import React, { FC, useMemo, useState } from 'react';
import styled from '../../../utils/styled';
import { splitVideosOnPages } from '../../../utils/video';
import VideoCard from '../VideoCard';

interface Props {
  incidentVideos: IncidentVideo[];
}

const VideoList: FC<Props> = ({ incidentVideos }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const videoPages = useMemo(() => splitVideosOnPages(incidentVideos), [
    incidentVideos,
  ]);
  const activePage = videoPages[currentPage];

  if (!activePage) {
    return null;
  }

  const onNextPage = () => {
    const isLastPage = currentPage + 1 === videoPages.length;
    setCurrentPage(isLastPage ? 0 : currentPage + 1);
  };

  return (
    <Container>
      {map(activePage, ({ id, duration, thumbnailUrl, text }, index) => (
        <VideoCard
          id={id}
          videoPages={videoPages}
          currentPage={currentPage}
          duration={duration}
          thumbnailUrl={thumbnailUrl}
          text={text}
          navigateClick={onNextPage}
          key={index}
        />
      ))}
    </Container>
  );
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
