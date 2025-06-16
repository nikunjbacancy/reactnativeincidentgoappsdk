import React, { ReactNode } from 'react';
declare const loadable: (importFunc: () => Promise<{
    default: any;
}>, { fallback }: {
    fallback: NonNullable<ReactNode> | null;
}) => (props: {}) => React.JSX.Element;
export default loadable;
