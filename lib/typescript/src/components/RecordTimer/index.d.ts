import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
interface Props {
    isRecording?: boolean;
    recordedTime?: number;
    style?: StyleProp<ViewStyle>;
}
declare const RecordTimer: FC<Props>;
export default RecordTimer;
