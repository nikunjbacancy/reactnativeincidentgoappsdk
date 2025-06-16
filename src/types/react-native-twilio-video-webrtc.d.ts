/* eslint-disable import/prefer-default-export,react/prefer-stateless-function,max-classes-per-file */
declare module 'react-native-twilio-video-webrtc' {
  import { ViewProps } from 'react-native';

  interface ParticipantTrack {
    participant: string;
    track: string;
  }

  interface TwilioVideoProps extends ViewProps {
    /**
     * Flag that enables screen sharing RCTRootView instead of camera capture
     */
    screenShare?: boolean;

    /**
     * Called when the room has connected
     *
     * @param {{roomName, participants}}
     */
    onRoomDidConnect?({
      roomName,
      participants,
    }: {
      roomName: string;
      participants: Map;
    }): void;

    /**
     * Called when the room has disconnected
     *
     * @param {{roomName, error}}
     */
    onRoomDidDisconnect?({
      roomName,
      error,
    }: {
      roomName: string;
      error: Error;
    });

    /**
     * Called when connection with room failed
     *
     * @param {{roomName, error}}
     */
    onRoomDidFailToConnect?({
      roomName,
      error,
    }: {
      roomName: string;
      error: Error;
    });

    /**
     * Called when a new participant has connected
     *
     * @param {{roomName, participant}}
     */
    onRoomParticipantDidConnect?({
      roomName,
      participant,
    }: {
      roomName: string;
      participant: string;
    });

    /**
     * Called when a participant has disconnected
     *
     * @param {{roomName, participant}}
     */
    onRoomParticipantDidDisconnect?({
      roomName,
      participant,
    }: {
      roomName: string;
      participant: string;
    });

    /**
     * Called when a new video track has been added
     *
     * @param {{participant, track, enabled}}
     */
    onParticipantAddedVideoTrack?({
      participant,
      track,
      enabled,
    }: {
      participant: string;
      track: string;
      enabled: boolean;
    });

    /**
     * Called when a video track has been removed
     *
     * @param {{participant, track}}
     */
    onParticipantRemovedVideoTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when a new audio track has been added
     *
     * @param {{participant, track}}
     */
    onParticipantAddedAudioTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when a audio track has been removed
     *
     * @param {{participant, track}}
     */
    onParticipantRemovedAudioTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when a video track has been enabled.
     *
     * @param {{participant, track}}
     */
    onParticipantEnabledVideoTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when a video track has been disabled.
     *
     * @param {{participant, track}}
     */
    onParticipantDisabledVideoTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when an audio track has been enabled.
     *
     * @param {{participant, track}}
     */
    onParticipantEnabledAudioTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when an audio track has been disabled.
     *
     * @param {{participant, track}}
     */
    onParticipantDisabledAudioTrack?({ participant, track }: ParticipantTrack);

    /**
     * Called when the camera has started
     *
     */
    onCameraDidStart?(): void;

    /**
     * Called when the camera has been interrupted
     *
     */
    onCameraWasInterrupted?(): void;

    /**
     * Called when the camera has stopped runing with an error
     *
     * @param {{error}} The error message description
     */
    onCameraDidStopRunning?({ error }: { error: Error }): void;

    /**
     * Called when stats are received (after calling getStats)
     *
     */
    onStatsReceived?(): void;
  }

  interface TwilioVideoLocalProps extends ViewProps {
    enabled: boolean;
  }

  export class TwilioVideo extends React.Component<TwilioVideoProps> {
    setLocalAudioEnabled(enabled: boolean): Promise<boolean>;

    setLocalVideoEnabled(enabled: boolean): Promise<boolean>;

    connect({
      roomName,
      accessToken,
      enableAudio,
      enableVideo,
      enableRemoteAudio,
    }: {
      roomName: string | undefined;
      accessToken: string;
      enableAudio?: boolean;
      enableVideo?: boolean;
      enableRemoteAudio?: boolean;
    }): void;

    disconnect(): void;

    flipCamera(): void;
  }

  export class TwilioVideoLocalView extends React.Component<
    TwilioVideoLocalProps
  > {}
}
