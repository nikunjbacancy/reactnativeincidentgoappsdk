import { IncidentVideo } from 'incident-code-core';
import React from 'react';
type Props = {
    trackerY: number;
    videoIndex: number;
    videos: IncidentVideo[];
    onVideoSelected: (index: number) => void;
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
