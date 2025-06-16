/// <reference types="react-navigation" />
import { Id, Organization, OrganizationProcedure } from 'incident-code-core';
import React from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    procedure?: OrganizationProcedure;
    organization?: Organization;
    id?: Id;
    isSafetyTimer?: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
    isFocused: boolean;
}
declare const _default: React.ComponentType<import("react-navigation").Omit<Props, keyof import("react-navigation").NavigationFocusInjectedProps<import("react-navigation").NavigationParams>>>;
export default _default;
