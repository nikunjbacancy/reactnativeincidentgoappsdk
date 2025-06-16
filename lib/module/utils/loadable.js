import React, { lazy, Suspense } from 'react';
const loadable = (importFunc, {
  fallback = null
}) => {
  const LazyComponent = /*#__PURE__*/lazy(importFunc);
  return props => /*#__PURE__*/React.createElement(Suspense, {
    fallback: fallback
  }, /*#__PURE__*/React.createElement(LazyComponent, props));
};
export default loadable;
//# sourceMappingURL=loadable.js.map