"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _forEach = _interopRequireDefault(require("lodash/forEach"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const splitVideosOnPages = videos => {
  const pages = [];
  const chunk = 3;
  for (let i = 0; i < videos.length; i += chunk) {
    const slice = videos.slice(i, i + chunk);
    pages.push(slice);
  }
  let skipped = 0;
  if (pages.length > 1) {
    (0, _forEach.default)(pages, (slice, sliceIndex) => {
      skipped += slice.length;
      const isLastVideo = sliceIndex === pages.length - 1;
      slice.push({
        id: `page-${sliceIndex}-last`,
        text: isLastVideo ? 'back' : `${videos.length - skipped}+`
      });
    });
  }
  return pages;
};
var _default = exports.default = splitVideosOnPages;
//# sourceMappingURL=splitVideosOnPages.js.map