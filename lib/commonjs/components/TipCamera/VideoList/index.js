"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map = _interopRequireDefault(require("lodash/map"));
var _react = _interopRequireWildcard(require("react"));
var _styled = _interopRequireDefault(require("../../../utils/styled"));
var _video = require("../../../utils/video");
var _VideoCard = _interopRequireDefault(require("../VideoCard"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const VideoList = ({
  incidentVideos
}) => {
  const [currentPage, setCurrentPage] = (0, _react.useState)(0);
  const videoPages = (0, _react.useMemo)(() => (0, _video.splitVideosOnPages)(incidentVideos), [incidentVideos]);
  const activePage = videoPages[currentPage];
  if (!activePage) {
    return null;
  }
  const onNextPage = () => {
    const isLastPage = currentPage + 1 === videoPages.length;
    setCurrentPage(isLastPage ? 0 : currentPage + 1);
  };
  return /*#__PURE__*/_react.default.createElement(Container, null, (0, _map.default)(activePage, ({
    id,
    duration,
    thumbnailUrl,
    text
  }, index) => /*#__PURE__*/_react.default.createElement(_VideoCard.default, {
    id: id,
    videoPages: videoPages,
    currentPage: currentPage,
    duration: duration,
    thumbnailUrl: thumbnailUrl,
    text: text,
    navigateClick: onNextPage,
    key: index
  })));
};
const Container = _styled.default.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70px;
  height: 90px;
  padding-left: 23px;
  padding-right: 23px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: center;
`;
var _default = exports.default = VideoList;
//# sourceMappingURL=index.js.map