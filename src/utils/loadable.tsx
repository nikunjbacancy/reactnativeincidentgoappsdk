import React, { lazy, ReactNode, Suspense } from 'react';

const loadable = (
  importFunc: () => Promise<{ default: any }>,
  { fallback = null }: { fallback: NonNullable<ReactNode> | null },
) => {
  const LazyComponent = lazy(importFunc);

  return (props: {}) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
