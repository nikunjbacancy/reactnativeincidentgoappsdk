import { logger } from '../../api';
import { images } from '../../assets';
import {
  setTipCameraMode,
  setTipCameraVideoIndex,
} from '../../containers/app/actions';
import {
  makeSelectConfigs,
  makeSelectTipCameraMode,
  makeSelectTipVideoIndex,
} from '../../containers/app/selectors';
import { Id, IncidentVideo } from 'incident-code-core';
import isEmpty from 'lodash/isEmpty';
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useIntl } from 'react-intl';
import { RecordOptions, RecordResponse, RNCamera } from 'react-native-camera';
import Toast from 'react-native-root-toast';
import { OnLoadData } from 'react-native-video';
import { LogEvent } from '../../types';
import { logEvent } from '../../utils/firebase';
import { useAction, useSelector, useTimerInterval } from '../../utils/hooks';
import { getCachedFinePosition } from '../../utils/location';
import { deleteLocalVideo } from '../../utils/video';
import {
  THUMBNAIL_MARGIN_RIGHT,
  THUMBNAIL_WIDTH,
  TRACKER_WIDTH_HALF,
} from './constants';
import messages from './messages';
import PlayButton from './PlayButton';
import {
  BottomControls,
  Camera,
  CameraFlashButton,
  CameraFlipButton,
  ChatButton,
  ChatContainer,
  CircleProgress,
  CloseButton,
  Container,
  TouchableLogo,
  Logo,
  PhoneButton,
  RecordControls,
  RecordStart,
  RecordStop,
  StyledBadge,
  Timer,
  VideoContainer,
  VideoLoading,
  VideoPlayer,
} from './styles';
import { CameraType, FlashMode, TipCameraMode } from './types';
import VideoList from './VideoList';
import VideoTracker from './VideoTracker';
import NavigatorService from '../../utils/navigation';

interface VideoProgress {
  currentTime: number;
  playableDuration: number;
  seekableDuration: number;
}

export type TipProps = {
  tipCameraMode?: TipCameraMode;
  incidentVideos: IncidentVideo[];
  isFocused?: boolean;
  isVideoPaused?: boolean;
  isRecordEnabled?: boolean;
  isChatDisabled?: boolean;
  onTimeChange?(time: number): void;
  onRecordStarted?(): void;
  onRecordFinished(uri: string): void;
  onPhonePress(): void;
  onChatPress(): void;
  badges?: Id[];
}

const TipCamera = forwardRef((
  { badges,
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
    onChatPress }: TipProps,
  ref: React.ForwardedRef<RNCamera>,
): React.ReactElement => {

  // const myRef = useRef<RNCamera>(ref);
  let myRef = useRef<RNCamera | null>(null);
  // console.log("myRef===>", myRef)

  const { formatMessage } = useIntl();

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
  const [videoUrl, setVideoUrl] = useState(incidentVideos[videoIndex]?.url);

  const setTipCameraModeAction = useAction(setTipCameraMode);
  const setTipCameraVideoIndexAction = useAction(setTipCameraVideoIndex);

  const handleTimeChange = useCallback(
    (time: number) => {
      onTimeChange && onTimeChange(time);
      recordedTime.current = time;
      setRecordedProgress(time / configs.maxRecordDuration);
    },
    [configs],
  );

  const handleRecordFinished = useCallback((filePath: string) => {
    if (recordedTime.current < 2) {
      Toast.show(formatMessage(messages.canceled), {
        position: Toast.positions.CENTER,
      });

      return deleteLocalVideo(filePath);
    }
    recordedTime.current = 0;
    onRecordFinished(filePath);
    return
  }, []);

  const { startTimer, stopTimer, time: recordSeconds } = useTimerInterval({
    interval: 500,
    increment: 0.5,
    onTimeChange: handleTimeChange,
    expire: configs.maxRecordDuration,
    onExpire: () => myRef?.current?.stopRecording()
  });

  useEffect(() => {

  }, [ref]);

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
    setVideoUrl(incidentVideos[videoIndex]?.url);
  }, [videoIndex]);

  useEffect(() => {
    if (incidentVideos[0]?.url) {
      setVideoUrl(incidentVideos[videoIndex]?.url);
    }
  }, [incidentVideos[0]?.url]);

  const onFlipButtonClick = useCallback(() => {
    if (isRecording) return;

    const currentCameraType =
      cameraType === CameraType.back ? CameraType.front : CameraType.back;

    logEvent(LogEvent.TapCamera, { cameraType });

    setFlashMode(FlashMode.off);
    setCameraType(currentCameraType);
  }, [isRecording, cameraType]);

  const onFlashButtonClick = useCallback(() => {
    if (isRecording) return;
    const isFlashOff = flashMode === FlashMode.off;
    const isCameraBack = cameraType === CameraType.back;
    const currentFlashMode =
      isFlashOff && isCameraBack ? FlashMode.on : FlashMode.off;

    logEvent(LogEvent.TapFlash, {
      mode: currentFlashMode,
    });

    setFlashMode(currentFlashMode);
  }, [isRecording, flashMode, cameraType]);

  const startCameraRecord = useCallback(
    async (camera: RNCamera) => {
      try {
        const options: RecordOptions = {
          quality: RNCamera.Constants.VideoQuality['480p'],
          codec: 'H264',
          maxDuration: configs.maxRecordDuration,
        };
        setIsRecording(true);
        const data: RecordResponse = await camera.recordAsync(options);
        logger.debug('Recorder', 'Recorded', data);
        await handleRecordFinished(data.uri);
      } catch (error) {
        logger.warn('Recorder', 'Record Failed', error);
      } finally {
        setIsRecording(false);
      }
    },
    [configs],
  );

  const stopCameraRecord = useCallback((camera: RNCamera) => {
    camera.stopRecording();
    setRecordedProgress(0);
  }, []);

  const record = useCallback(async () => {
    onRecordStarted?.();
    setTipCameraModeAction(TipCameraMode.camera);
    setTrackerY(-TRACKER_WIDTH_HALF);
    setVideoSeconds(0);
    setRecordedProgress(0);
    console.log("!myRef?.current", !myRef?.current)
    if (!myRef?.current) return;
    try {
      await getCachedFinePosition();
      if (isRecording) {
        logEvent(LogEvent.TapStopRecord);
        stopCameraRecord(myRef?.current);
      } else {
        logEvent(LogEvent.TapRecord);
        await startCameraRecord(myRef?.current);
      }
    } catch (error) {
      Toast.show(formatMessage(messages.noLocation), {
        position: Toast.positions.CENTER,
      });
      stopCameraRecord(myRef?.current);
    }
  }, [onRecordStarted, isRecording]);

  // video
  const toggleVideoPause = useCallback(() => {
    setShouldPauseVideo(!shouldPauseVideo);
  }, [shouldPauseVideo]);

  const onVideoLoaded = useCallback((data: OnLoadData) => {
    setVideoLoading(false);
    setDuration(data.duration);
  }, []);

  const onVideoProgress = useCallback(
    (video: VideoProgress) => {
      const step = THUMBNAIL_WIDTH / duration;
      setTrackerY(
        step * video.currentTime +
        (THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * videoIndex -
        TRACKER_WIDTH_HALF,
      );
      setVideoSeconds(video.currentTime);
    },
    [videoIndex, duration],
  );

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
      setTrackerY(
        (THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * nextIndex -
        TRACKER_WIDTH_HALF,
      );
      setVideoUrl(incidentVideos[nextIndex].url);
    }
  }, [incidentVideos, videoIndex]);

  const onVideoSelected = useCallback(
    (index: number) => {
      if (index !== videoIndex) {
        setTipCameraVideoIndexAction(index);
        setVideoSeconds(0);
        setTrackerY(
          (THUMBNAIL_WIDTH + THUMBNAIL_MARGIN_RIGHT) * index -
          TRACKER_WIDTH_HALF,
        );
        setVideoUrl(incidentVideos[index].url);
      }
    },
    [incidentVideos, videoIndex],
  );

  const closeVideoPlayer = useCallback(() => {
    setTipCameraModeAction(TipCameraMode.camera);
  }, []);

  const onLogoPressed = () => {
    NavigatorService.back();
  }

  return (
    <Container>
      {cameraMode === TipCameraMode.camera ? (
        <Camera
          // ref={ref}
          ref={(node : any) => {
            myRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          captureAudio
          type={cameraType}
          flashMode={flashMode}
          androidCameraPermissionOptions={{
            title: formatMessage(messages.permissionWarning),
            message: formatMessage(messages.permissionCameraBody),
            buttonPositive: formatMessage(messages.ok),
            buttonNegative: formatMessage(messages.cancel),
          }}
          androidRecordAudioPermissionOptions={{
            title: formatMessage(messages.permissionWarning),
            message: formatMessage(messages.permissionRecordAudioBody),
            buttonPositive: formatMessage(messages.ok),
            buttonNegative: formatMessage(messages.cancel),
          }}
        >
          <VideoList incidentVideos={incidentVideos} />
          <CameraFlashButton
            onPress={onFlashButtonClick}
            isDisabled={isRecording}
            image={
              flashMode === FlashMode.off
                ? images.icFlash()
                : images.icFlashActive()
            }
          />
          <CameraFlipButton
            onPress={onFlipButtonClick}
            isDisabled={isRecording}
            image={
              cameraType === CameraType.back
                ? images.icFlip()
                : images.icFlipActive()
            }
          />
        </Camera>
      ) : (
        <VideoContainer onPress={toggleVideoPause}>
          <>
            <VideoPlayer
              onLoadStart={() => setVideoLoading(true)}
              source={{ uri: videoUrl }}
              paused={shouldPauseVideo}
              onLoad={onVideoLoaded}
              onProgress={onVideoProgress}
              repeat={incidentVideos.length === 1}
              onEnd={onVideoEnd}
              resizeMode="cover"
            />
            {videoLoading && <VideoLoading />}
            <PlayButton isPlaying={!shouldPauseVideo} />
            <VideoTracker
              trackerY={trackerY}
              videoIndex={videoIndex}
              videos={incidentVideos}
              onVideoSelected={onVideoSelected}
            />
            <CloseButton source={images.icClose()} onPress={closeVideoPlayer} />
          </>
        </VideoContainer>
      )}

      <TouchableLogo onPress={onLogoPressed}>
        <Logo />
      </TouchableLogo>

      <Timer
        isRecording={isRecording}
        recordedTime={recordSeconds || videoSeconds}
      />
      <BottomControls>
        <PhoneButton
          onPress={onPhonePress}
          isDisabled={isRecording}
          image={images.icPhoneCall()}
        />
        <RecordControls disabled={!isRecordEnabled} onPress={record}>
          {isRecording ? (
            <RecordStop />
          ) : (
            <RecordStart disabled={!isRecordEnabled} />
          )}
          {isRecording && (
            <CircleProgress
              progress={recordedProgress}
              size={74}
              borderWidth={0}
              fill={"#00000000"}
            />
          )}
        </RecordControls>
        <ChatContainer>
          <ChatButton
            onPress={onChatPress}
            isDisabled={isRecording || isChatDisabled}
            image={images.icChat()}
          />
          {!isEmpty(badges) && <StyledBadge length={badges?.length} />}
        </ChatContainer>
      </BottomControls>
    </Container>
  );
});

export default memo(TipCamera);
