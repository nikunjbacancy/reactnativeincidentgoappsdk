import { logger } from '../../api';
import { images } from '../../assets';
import { setTipCameraMode, setTipCameraVideoIndex } from '../../containers/app/actions';
import { makeSelectConfigs, makeSelectTipCameraMode, makeSelectTipVideoIndex } from '../../containers/app/selectors';
import isEmpty from 'lodash/isEmpty';
import React, { forwardRef, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { RNCamera } from 'react-native-camera';
import Toast from 'react-native-root-toast';
import { LogEvent } from '../../types';
import { logEvent } from '../../utils/firebase';
import { useAction, useSelector, useTimerInterval } from '../../utils/hooks';
import { getCachedFinePosition } from '../../utils/location';
import { deleteLocalVideo } from '../../utils/video';
import { THUMBNAIL_MARGIN_RIGHT, THUMBNAIL_WIDTH, TRACKER_WIDTH_HALF } from './constants';
import messages from './messages';
import PlayButton from './PlayButton';
import { BottomControls, Camera, CameraFlashButton, CameraFlipButton, ChatButton, ChatContainer, CircleProgress, CloseButton, Container, TouchableLogo, Logo, PhoneButton, RecordControls, RecordStart, RecordStop, StyledBadge, Timer, VideoContainer, VideoLoading, VideoPlayer } from './styles';
import { CameraType, FlashMode, TipCameraMode } from './types';
import VideoList from './VideoList';
import VideoTracker from './VideoTracker';
import NavigatorService from '../../utils/navigation';
const TipCamera = /*#__PURE__*/forwardRef(({
  badges,
  tipCameraMode = TipCameraMode.camera,
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
  let myRef = useRef(null);
  // console.log("myRef===>", myRef)

  const {
    formatMessage
  } = useIntl();

  // camera
  const recordedTime = useRef(0);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [recordedProgress, setRecordedProgress] = useState(0);
  const [isRecording, setIsRecording] = useState(false);

  // video
  const cameraMode = useSelector(makeSelectTipCameraMode());
  const configs = useSelector(makeSelectConfigs());
  const videoIndex = useSelector(makeSelectTipVideoIndex());
  const [videoLoading, setVideoLoading] = useState(true);
  const [videoSeconds, setVideoSeconds] = useState(0);
  const [duration, setDuration] = useState(1);
  const [trackerY, setTrackerY] = useState(-TRACKER_WIDTH_HALF);
  const [shouldPauseVideo, setShouldPauseVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState((_incidentVideos$video = incidentVideos[videoIndex]) === null || _incidentVideos$video === void 0 ? void 0 : _incidentVideos$video.url);
  const setTipCameraModeAction = useAction(setTipCameraMode);
  const setTipCameraVideoIndexAction = useAction(setTipCameraVideoIndex);
  const handleTimeChange = useCallback(time => {
    onTimeChange && onTimeChange(time);
    recordedTime.current = time;
    setRecordedProgress(time / configs.maxRecordDuration);
  }, [configs]);
  const handleRecordFinished = useCallback(filePath => {
    if (recordedTime.current < 2) {
      Toast.show(formatMessage(messages.canceled), {
        position: Toast.positions.CENTER
      });
      return deleteLocalVideo(filePath);
    }
    recordedTime.current = 0;
    onRecordFinished(filePath);
    return;
  }, []);
  const {
    startTimer,
    stopTimer,
    time: recordSeconds
  } = useTimerInterval({
    interval: 500,
    increment: 0.5,
    onTimeChange: handleTimeChange,
    expire: configs.maxRecordDuration,
    onExpire: () => {
      var _myRef$current;
      return myRef === null || myRef === void 0 || (_myRef$current = myRef.current) === null || _myRef$current === void 0 ? void 0 : _myRef$current.stopRecording();
    }
  });
  useEffect(() => {}, [ref]);
  useEffect(() => {
    setTipCameraModeAction(tipCameraMode);
  }, [tipCameraMode]);
  useEffect(() => {
    if (!isFocused) {
      setFlashMode(FlashMode.off);
      setCameraType(CameraType.back);
    }
  }, [isFocused]);
  useEffect(() => {
    if (isRecording) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [isRecording]);
  useEffect(() => {
    setShouldPauseVideo(!!isVideoPaused);
  }, [isVideoPaused]);
  useEffect(() => {
    var _incidentVideos$video2;
    setVideoUrl((_incidentVideos$video2 = incidentVideos[videoIndex]) === null || _incidentVideos$video2 === void 0 ? void 0 : _incidentVideos$video2.url);
  }, [videoIndex]);
  useEffect(() => {
    var _incidentVideos$;
    if ((_incidentVideos$ = incidentVideos[0]) !== null && _incidentVideos$ !== void 0 && _incidentVideos$.url) {
      var _incidentVideos$video3;
      setVideoUrl((_incidentVideos$video3 = incidentVideos[videoIndex]) === null || _incidentVideos$video3 === void 0 ? void 0 : _incidentVideos$video3.url);
    }
  }, [(_incidentVideos$2 = incidentVideos[0]) === null || _incidentVideos$2 === void 0 ? void 0 : _incidentVideos$2.url]);
  const onFlipButtonClick = useCallback(() => {
    if (isRecording) return;
    const currentCameraType = cameraType === CameraType.back ? CameraType.front : CameraType.back;
    logEvent(LogEvent.TapCamera, {
      cameraType
    });
    setFlashMode(FlashMode.off);
    setCameraType(currentCameraType);
  }, [isRecording, cameraType]);
  const onFlashButtonClick = useCallback(() => {
    if (isRecording) return;
    const isFlashOff = flashMode === FlashMode.off;
    const isCameraBack = cameraType === CameraType.back;
    const currentFlashMode = isFlashOff && isCameraBack ? FlashMode.on : FlashMode.off;
    logEvent(LogEvent.TapFlash, {
      mode: currentFlashMode
    });
    setFlashMode(currentFlashMode);
  }, [isRecording, flashMode, cameraType]);
  const startCameraRecord = useCallback(async camera => {
    try {
      const options = {
        quality: RNCamera.Constants.VideoQuality['480p'],
        codec: 'H264',
        maxDuration: configs.maxRecordDuration
      };
      setIsRecording(true);
      const data = await camera.recordAsync(options);
      logger.debug('Recorder', 'Recorded', data);
      await handleRecordFinished(data.uri);
    } catch (error) {
      logger.warn('Recorder', 'Record Failed', error);
    } finally {
      setIsRecording(false);
    }
  }, [configs]);
  const stopCameraRecord = useCallback(camera => {
    camera.stopRecording();
    setRecordedProgress(0);
  }, []);
  const record = useCallback(async () => {
    onRecordStarted === null || onRecordStarted === void 0 || onRecordStarted();
    setTipCameraModeAction(TipCameraMode.camera);
    setTrackerY(-TRACKER_WIDTH_HALF);
    setVideoSeconds(0);
    setRecordedProgress(0);
    console.log("!myRef?.current", !(myRef !== null && myRef !== void 0 && myRef.current));
    if (!(myRef !== null && myRef !== void 0 && myRef.current)) return;
    try {
      await getCachedFinePosition();
      if (isRecording) {
        logEvent(LogEvent.TapStopRecord);
        stopCameraRecord(myRef === null || myRef === void 0 ? void 0 : myRef.current);
      } else {
        logEvent(LogEvent.TapRecord);
        await startCameraRecord(myRef === null || myRef === void 0 ? void 0 : myRef.current);
      }
    } catch (error) {
      Toast.show(formatMessage(messages.noLocation), {
        position: Toast.positions.CENTER
      });
      stopCameraRecord(myRef === null || myRef === void 0 ? void 0 : myRef.current);
    }
  }, [onRecordStarted, isRecording]);

  // video
  const toggleVideoPause = useCallback(() => {
    setShouldPauseVideo(!shouldPauseVideo);
  }, [shouldPauseVideo]);
  const onVideoLoaded = useCallback(data => {
    setVideoLoading(false);
    setDuration(data.duration);
  }, []);
  const onVideoProgress = useCallback(video => {
    const step = THUMBNAIL_WIDTH / duration;
    setTrackerY(step * video.currentTime + (THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * videoIndex - TRACKER_WIDTH_HALF);
    setVideoSeconds(video.currentTime);
  }, [videoIndex, duration]);
  const onVideoEnd = useCallback(() => {
    if (incidentVideos.length === 1) {
      setVideoSeconds(0);
      setTipCameraVideoIndexAction(0);
      setTrackerY(-TRACKER_WIDTH_HALF);
      setShouldPauseVideo(false);
    } else {
      const nextIndex = (videoIndex + 1) % incidentVideos.length;
      setTipCameraVideoIndexAction(nextIndex);
      setVideoSeconds(0);
      setTrackerY((THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * nextIndex - TRACKER_WIDTH_HALF);
      setVideoUrl(incidentVideos[nextIndex].url);
    }
  }, [incidentVideos, videoIndex]);
  const onVideoSelected = useCallback(index => {
    if (index !== videoIndex) {
      setTipCameraVideoIndexAction(index);
      setVideoSeconds(0);
      setTrackerY((THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * index - TRACKER_WIDTH_HALF);
      setVideoUrl(incidentVideos[index].url);
    }
  }, [incidentVideos, videoIndex]);
  const closeVideoPlayer = useCallback(() => {
    setTipCameraModeAction(TipCameraMode.camera);
  }, []);
  const onLogoPressed = () => {
    NavigatorService.back();
  };
  return /*#__PURE__*/React.createElement(Container, null, cameraMode === TipCameraMode.camera ? /*#__PURE__*/React.createElement(Camera
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
      title: formatMessage(messages.permissionWarning),
      message: formatMessage(messages.permissionCameraBody),
      buttonPositive: formatMessage(messages.ok),
      buttonNegative: formatMessage(messages.cancel)
    },
    androidRecordAudioPermissionOptions: {
      title: formatMessage(messages.permissionWarning),
      message: formatMessage(messages.permissionRecordAudioBody),
      buttonPositive: formatMessage(messages.ok),
      buttonNegative: formatMessage(messages.cancel)
    }
  }, /*#__PURE__*/React.createElement(VideoList, {
    incidentVideos: incidentVideos
  }), /*#__PURE__*/React.createElement(CameraFlashButton, {
    onPress: onFlashButtonClick,
    isDisabled: isRecording,
    image: flashMode === FlashMode.off ? images.icFlash() : images.icFlashActive()
  }), /*#__PURE__*/React.createElement(CameraFlipButton, {
    onPress: onFlipButtonClick,
    isDisabled: isRecording,
    image: cameraType === CameraType.back ? images.icFlip() : images.icFlipActive()
  })) : /*#__PURE__*/React.createElement(VideoContainer, {
    onPress: toggleVideoPause
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VideoPlayer, {
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
  }), videoLoading && /*#__PURE__*/React.createElement(VideoLoading, null), /*#__PURE__*/React.createElement(PlayButton, {
    isPlaying: !shouldPauseVideo
  }), /*#__PURE__*/React.createElement(VideoTracker, {
    trackerY: trackerY,
    videoIndex: videoIndex,
    videos: incidentVideos,
    onVideoSelected: onVideoSelected
  }), /*#__PURE__*/React.createElement(CloseButton, {
    source: images.icClose(),
    onPress: closeVideoPlayer
  }))), /*#__PURE__*/React.createElement(TouchableLogo, {
    onPress: onLogoPressed
  }, /*#__PURE__*/React.createElement(Logo, null)), /*#__PURE__*/React.createElement(Timer, {
    isRecording: isRecording,
    recordedTime: recordSeconds || videoSeconds
  }), /*#__PURE__*/React.createElement(BottomControls, null, /*#__PURE__*/React.createElement(PhoneButton, {
    onPress: onPhonePress,
    isDisabled: isRecording,
    image: images.icPhoneCall()
  }), /*#__PURE__*/React.createElement(RecordControls, {
    disabled: !isRecordEnabled,
    onPress: record
  }, isRecording ? /*#__PURE__*/React.createElement(RecordStop, null) : /*#__PURE__*/React.createElement(RecordStart, {
    disabled: !isRecordEnabled
  }), isRecording && /*#__PURE__*/React.createElement(CircleProgress, {
    progress: recordedProgress,
    size: 74,
    borderWidth: 0,
    fill: "#00000000"
  })), /*#__PURE__*/React.createElement(ChatContainer, null, /*#__PURE__*/React.createElement(ChatButton, {
    onPress: onChatPress,
    isDisabled: isRecording || isChatDisabled,
    image: images.icChat()
  }), !isEmpty(badges) && /*#__PURE__*/React.createElement(StyledBadge, {
    length: badges === null || badges === void 0 ? void 0 : badges.length
  }))));
});
export default /*#__PURE__*/memo(TipCamera);
//# sourceMappingURL=index.js.map