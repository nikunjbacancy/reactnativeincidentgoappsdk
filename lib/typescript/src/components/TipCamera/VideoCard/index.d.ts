import { ObjectId } from 'incident-code-core';
import { FC } from 'react';
import { IncidentVideoInfo } from 'types';
interface Props {
    id: string | ObjectId | undefined;
    videoPages: IncidentVideoInfo[][];
    currentPage: number;
    duration?: number;
    thumbnailUrl?: string;
    text?: string;
    navigateClick(): void;
}
declare const VideoCard: FC<Props>;
export default VideoCard;
