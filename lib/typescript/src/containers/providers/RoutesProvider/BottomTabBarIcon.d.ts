import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
interface Props {
    source: ImageSourcePropType;
    focused?: boolean;
    size?: number;
    showBadge?: boolean;
}
declare const BottomTabBarIcon: FC<Props>;
export default BottomTabBarIcon;
