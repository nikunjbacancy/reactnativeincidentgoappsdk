import React from 'react';
import { WelcomeItem } from '../types';
interface Props {
    index: number;
    onIndexChange(index: number): void;
    welcomeItems: WelcomeItem[];
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
