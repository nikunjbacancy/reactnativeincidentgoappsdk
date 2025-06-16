"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = require("../../api");
var _assets = require("../../assets");
var _actions = require("../../containers/app/actions");
var _selectors = require("../../containers/app/selectors");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNativeCamera = require("react-native-camera");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _types = require("../../types");
var _firebase = require("../../utils/firebase");
var _hooks = require("../../utils/hooks");
var _location = require("../../utils/location");
var _video = require("../../utils/video");
var _constants = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _PlayButton = _interopRequireDefault(require("./PlayButton"));
var _styles = require("./styles");
var _types2 = require("./types");
var _VideoList = _interopRequireDefault(require("./VideoList"));
var _VideoTracker = _interopRequireDefault(require("./VideoTracker"));
var _navigation = _interopRequireDefault(require("../../utils/navigation"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TipCamera = /*#__PURE__*/(0, _react.forwardRef)(({
  badges,
  tipCameraMode = _types2.TipCameraMode.camera,
  incidentVideos,
  isFocused = true,
  isVideoPaused,
  isRecordEnabled,
  isChatDisabled,
  onTimeChange,
  onRecordStarted,
  onRecordFinished,
  onPhonePress,
  onChatPress
}, ref) => {
  var _incidentVideos$video, _incidentVideos$2;
  // const myRef = useRef<RNCamera>(ref);
  let myRef = (0, _react.useRef)(null);
  // console.log("myRef===>", myRef)

  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();

  // camera
  const recordedTime = (0, _react.useRef)(0);
  const [cameraType, setCameraType] = (0, _react.useState)(_types2.CameraType.back);
  const [flashMode, setFlashMode] = (0, _react.useState)(_types2.FlashMode.off);
  const [recordedProgress, setRecordedProgress] = (0, _react.useState)(0);
  const [isRecording, setIsRecording] = (0, _react.useState)(false);

  // video
  const cameraMode = (0, _hooks.useSelector)((0, _selectors.makeSelectTipCameraMode)());
  const configs = (0, _hooks.useSelector)((0, _selectors.makeSelectConfigs)());
  const videoIndex = (0, _hooks.useSelector)((0, _selectors.makeSelectTipVideoIndex)());
  const [videoLoading, setVideoLoading] = (0, _react.useState)(true);
  const [videoSeconds, setVideoSeconds] = (0, _react.useState)(0);
  const [duration, setDuration] = (0, _react.useState)(1);
  const [trackerY, setTrackerY] = (0, _react.useState)(-_constants.TRACKER_WIDTH_HALF);
  const [shouldPauseVideo, setShouldPauseVideo] = (0, _react.useState)(false);
  const [videoUrl, setVideoUrl] = (0, _react.useState)((_incidentVideos$video = incidentVideos[videoIndex]) === null || _incidentVideos$video === void 0 ? void 0 : _incidentVideos$video.url);
  const setTipCameraModeAction = (0, _hooks.useAction)(_actions.setTipCameraMode);
  const setTipCameraVideoIndexAction = (0, _hooks.useAction)(_actions.setTipCameraVideoIndex);
  const handleTimeChange = (0, _react.useCallback)(time => {
    onTimeChange && onTimeChange(time);
    recordedTime.current = time;
    setRecordedProgress(time / configs.maxRecordDuration);
  }, [configs]);
  const handleRecordFinished = (0, _react.useCallback)(filePath => {
    if (recordedTime.current < 2) {
      _reactNativeRootToast.default.show(formatMessage(_messages.default.canceled), {
        position: _reactNativeRootToast.default.positions.CENTER
      });
      return (0, _video.deleteLocalVideo)(filePath);
    }
    recordedTime.current = 0;
    onRecordFinished(filePath);
    return;
  }, []);
  const {
    startTimer,
    stopTimer,
    time: recordSeconds
  } = (0, _hooks.useTimerInterval)({
    interval: 500,
    increment: 0.5,
    onTimeChange: handleTimeChange,
    expire: configs.maxRecordDuration,
    onExpire: () => {
      var _myRef$current;
      return myRef === null || myRef === void 0 || (_myRef$current = myRef.current) === null || _myRef$current === void 0 ? void 0 : _myRef$current.stopRecording();
    }
  });
  (0, _react.useEffect)(() => {}, [ref]);
  (0, _react.useEffect)(() => {
    setTipCameraModeAction(tipCameraMode);
  }, [tipCameraMode]);
  (0, _react.useEffect)(() => {
    if (!isFocused) {
      setFlashMode(_types2.FlashMode.off);
      setCameraType(_types2.CameraType.back);
    }
  }, [isFocused]);
  (0, _react.useEffect)(() => {
    if (isRecording) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [isRecording]);
  (0, _react.useEffect)(() => {
    setShouldPauseVideo(!!isVideoPaused);
  }, [isVideoPaused]);
  (0, _react.useEffect)(() => {
    var _incidentVideos$video2;
    setVideoUrl((_incidentVideos$video2 = incidentVideos[videoIndex]) === null || _incidentVideos$video2 === void 0 ? void 0 : _incidentVideos$video2.url);
  }, [videoIndex]);
  (0, _react.useEffect)(() => {
    var _incidentVideos$;
    if ((_incidentVideos$ = incidentVideos[0]) !== null && _incidentVideos$ !== void 0 && _incidentVideos$.url) {
      var _incidentVideos$video3;
      setVideoUrl((_incidentVideos$video3 = incidentVideos[videoIndex]) === null || _incidentVideos$video3 === void 0 ? void 0 : _incidentVideos$video3.url);
    }
  }, [(_incidentVideos$2 = incidentVideos[0]) === null || _incidentVideos$2 === void 0 ? void 0 : _incidentVideos$2.url]);
  const onFlipButtonClick = (0, _react.useCallback)(() => {
    if (isRecording) return;
    const currentCameraType = cameraType === _types2.CameraType.back ? _types2.CameraType.front : _types2.CameraType.back;
    (0, _firebase.logEvent)(_types.LogEvent.TapCamera, {
      cameraType
    });
    setFlashMode(_types2.FlashMode.off);
    setCameraType(currentCameraType);
  }, [isRecording, cameraType]);
  const onFlashButtonClick = (0, _react.useCallback)(() => {
    if (isRecording) return;
    const isFlashOff = flashMode === _types2.FlashMode.off;
    const isCameraBack = cameraType === _types2.CameraType.back;
    const currentFlashMode = isFlashOff && isCameraBack ? _types2.FlashMode.on : _types2.FlashMode.off;
    (0, _firebase.logEvent)(_types.LogEvent.TapFlash, {
      mode: currentFlashMode
    });
    setFlashMode(currentFlashMode);
  }, [isRecording, flashMode, cameraType]);
  const startCameraRecord = (0, _react.useCallback)(async camera => {
    try {
      const options = {
        quality: _reactNativeCamera.RNCamera.Constants.VideoQuality['480p'],
        codec: 'H264',
        maxDuration: configs.maxRecordDuration
      };
      setIsRecording(true);
      const data = await camera.recordAsync(options);
      _api.logger.debug('Recorder', 'Recorded', data);
      await handleRecordFinished(data.uri);
    } catch (error) {
      _api.logger.warn('Recorder', 'Record Failed', error);
    } finally {
      setIsRecording(false);
    }
  }, [configs]);
  const stopCameraRecord = (0, _react.useCallback)(camera => {
    camera.stopRecording();
    setRecordedProgress(0);
  }, []);
  const record = (0, _react.useCallback)(async () => {
    onRecordStarted === null || onRecordStarted === void 0 || onRecordStarted();
    setTipCameraModeAction(_types2.TipCameraMode.camera);
    setTrackerY(-_constants.TRACKER_WIDTH_HALF);
    setVideoSeconds(0);
    setRecordedProgress(0);
    console.log("!myRef?.current", !(myRef !== null && myRef !== void 0 && myRef.current));
    if (!(myRef !== null && myRef !== void 0 && myRef.current)) return;
    try {
      await (0, _location.getCachedFinePosition)();
      if (isRecording) {
        (0, _firebase.logEvent)(_types.LogEvent.TapStopRecord);
        stopCameraRecord(myRef === null || myRef === void 0 ? void 0 : myRef.current);
      } else {
        (0, _firebase.logEvent)(_types.LogEvent.TapRecord);
        await startCameraRecord(myRef === null || myRef === void 0 ? void 0 : myRef.current);
      }
    } catch (error) {
      _reactNativeRootToast.default.show(formatMessage(_messages.default.noLocation), {
        position: _reactNativeRootToast.default.positions.CENTER
      });
      stopCameraRecord(myRef === null || myRef === void 0 ? void 0 : myRef.current);
    }
  }, [onRecordStarted, isRecording]);

  // video
  const toggleVideoPause = (0, _react.useCallback)(() => {
    setShouldPauseVideo(!shouldPauseVideo);
  }, [shouldPauseVideo]);
  const onVideoLoaded = (0, _react.useCallback)(data => {
    setVideoLoading(false);
    setDuration(data.duration);
  }, []);
  const onVideoProgress = (0, _react.useCallback)(video => {
    const step = _constants.THUMBNAIL_WIDTH / duration;
    setTrackerY(step * video.currentTime + (_constants.THUMBNAIL_WIDTH + _constants.THUMBNAIL_MARGIN_RIGHT) * videoIndex - _constants.TRACKER_WIDTH_HALF);
    setVideoSeconds(video.currentTime);
  }, [videoIndex, duration]);
  const onVideoEnd = (0, _react.useCallback)(() => {
    if (incidentVideos.length === 1) {
      setVideoSeconds(0);
      setTipCameraVideoIndexAction(0);
      setTrackerY(-_constants.TRACKER_WIDTH_HALF);
      setShouldPauseVideo(false);
    } else {
      const nextIndex = (videoIndex + 1) % incidentVideos.length;
      setTipCameraVideoIndexAction(nextIndex);
      setVideoSeconds(0);
      setTrackerY((_constants.THUMBNAIL_WIDTH + _constants.THUMBNAIL_MARGIN_RIGHT) * nextIndex - _constants.TRACKER_WIDTH_HALF);
      setVideoUrl(incidentVideos[nextIndex].url);
    }
  }, [incidentVideos, videoIndex]);
  const onVideoSelected = (0, _react.useCallback)(index => {
    if (index !== videoIndex) {
      setTipCameraVideoIndexAction(index);
      setVideoSeconds(0);
      setTrackerY((_constants.THUMBNAIL_WIDTH + _constants.THUMBNAIL_MARGIN_RIGHT) * index - _constants.TRACKER_WIDTH_HALF);
      setVideoUrl(incidentVideos[index].url);
    }
  }, [incidentVideos, videoIndex]);
  const closeVideoPlayer = (0, _react.useCallback)(() => {
    setTipCameraModeAction(_types2.TipCameraMode.camera);
  }, []);
  const onLogoPressed = () => {
    _navigation.default.back();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, cameraMode === _types2.TipCameraMode.camera ? /*#__PURE__*/_react.default.createElement(_styles.Camera
  // ref={ref}
  , {
    ref: node => {
      myRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    captureAudio: true,
    type: cameraType,
    flashMode: flashMode,
    androidCameraPermissionOptions: {
      title: formatMessage(_messages.default.permissionWarning),
      message: formatMessage(_messages.default.permissionCameraBody),
      buttonPositive: formatMessage(_messages.default.ok),
      buttonNegative: formatMessage(_messages.default.cancel)
    },
    androidRecordAudioPermissionOptions: {
      title: formatMessage(_messages.default.permissionWarning),
      message: formatMessage(_messages.default.permissionRecordAudioBody),
      buttonPositive: formatMessage(_messages.default.ok),
      buttonNegative: formatMessage(_messages.default.cancel)
    }
  }, /*#__PURE__*/_react.default.createElement(_VideoList.default, {
    incidentVideos: incidentVideos
  }), /*#__PURE__*/_react.default.createElement(_styles.CameraFlashButton, {
    onPress: onFlashButtonClick,
    isDisabled: isRecording,
    image: flashMode === _types2.FlashMode.off ? _assets.images.icFlash() : _assets.images.icFlashActive()
  }), /*#__PURE__*/_react.default.createElement(_styles.CameraFlipButton, {
    onPress: onFlipButtonClick,
    isDisabled: isRecording,
    image: cameraType === _types2.CameraType.back ? _assets.images.icFlip() : _assets.images.icFlipActive()
  })) : /*#__PURE__*/_react.default.createElement(_styles.VideoContainer, {
    onPress: toggleVideoPause
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.VideoPlayer, {
    onLoadStart: () => setVideoLoading(true),
    source: {
      uri: videoUrl
    },
    paused: shouldPauseVideo,
    onLoad: onVideoLoaded,
    onProgress: onVideoProgress,
    repeat: incidentVideos.length === 1,
    onEnd: onVideoEnd,
    resizeMode: "cover"
  }), videoLoading && /*#__PURE__*/_react.default.createElement(_styles.VideoLoading, null), /*#__PURE__*/_react.default.createElement(_PlayButton.default, {
    isPlaying: !shouldPauseVideo
  }), /*#__PURE__*/_react.default.createElement(_VideoTracker.default, {
    trackerY: trackerY,
    videoIndex: videoIndex,
    videos: incidentVideos,
    onVideoSelected: onVideoSelected
  }), /*#__PURE__*/_react.default.createElement(_styles.CloseButton, {
    source: _assets.images.icClose(),
    onPress: closeVideoPlayer
  }))), /*#__PURE__*/_react.default.createElement(_styles.TouchableLogo, {
    onPress: onLogoPressed
  }, /*#__PURE__*/_react.default.createElement(_styles.Logo, null)), /*#__PURE__*/_react.default.createElement(_styles.Timer, {
    isRecording: isRecording,
    recordedTime: recordSeconds || videoSeconds
  }), /*#__PURE__*/_react.default.createElement(_styles.BottomControls, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneButton, {
    onPress: onPhonePress,
    isDisabled: isRecording,
    image: _assets.images.icPhoneCall()
  }), /*#__PURE__*/_react.default.createElement(_styles.RecordControls, {
    disabled: !isRecordEnabled,
    onPress: record
  }, isRecording ? /*#__PURE__*/_react.default.createElement(_styles.RecordStop, null) : /*#__PURE__*/_react.default.createElement(_styles.RecordStart, {
    disabled: !isRecordEnabled
  }), isRecording && /*#__PURE__*/_react.default.createElement(_styles.CircleProgress, {
    progress: recordedProgress,
    size: 74,
    borderWidth: 0,
    fill: "#00000000"
  })), /*#__PURE__*/_react.default.createElement(_styles.ChatContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ChatButton, {
    onPress: onChatPress,
    isDisabled: isRecording || isChatDisabled,
    image: _assets.images.icChat()
  }), !(0, _isEmpty.default)(badges) && /*#__PURE__*/_react.default.createElement(_styles.StyledBadge, {
    length: badges === null || badges === void 0 ? void 0 : badges.length
  }))));
});
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(TipCamera);
//# sourceMappingURL=index.js.map