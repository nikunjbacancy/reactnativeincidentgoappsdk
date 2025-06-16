import { ImageSourcePropType } from 'react-native';
import { sdkConfigs } from '../../src/sdkConfigs'

const images = {
  icAdd: (): ImageSourcePropType => require('./images/ic_add.png'),
  icAddUser: (): ImageSourcePropType => require('./images/ic_add_user.png'),
  icAudio: (): ImageSourcePropType => require('./images/ic_audio.png'),
  icAlert: (): ImageSourcePropType => require('./images/ic_alert.png'),
  icBack: (): ImageSourcePropType => require('./images/ic_back.png'),
  icBackDark: (): ImageSourcePropType => require('./images/ic_back_dark.png'),
  icCamera: (): ImageSourcePropType => require('./images/ic_camera.png'),
  icChat: (): ImageSourcePropType => require('./images/ic_chat.png'),
  icCheck: (): ImageSourcePropType => require('./images/ic_check.png'),
  icCheckbox: (): ImageSourcePropType => require('./images/checkbox_clear.png'),
  icCheckboxActive: (): ImageSourcePropType => require('./images/checkbox.png'),
  icClose: (): ImageSourcePropType => require('./images/ic_close.png'),
  icContact: (): ImageSourcePropType => require('./images/ic_contact.png'),
  icContactSelected: (): ImageSourcePropType =>
    require('./images/ic_contact_selected.png'),
  icEdit: (): ImageSourcePropType => require('./images/ic_edit.png'),
  icError: (): ImageSourcePropType => require('./images/ic_error.png'),
  icEscort: (): ImageSourcePropType => require('./images/ic_escort.png'),
  icFeedback: (): ImageSourcePropType => require('./images/ic_feedback.png'),
  icFeedbackSelected: (): ImageSourcePropType =>
    require('./images/ic_feedback_selected.png'),
  icFlash: (): ImageSourcePropType => require('./images/ic_flash.png'),
  icFlashActive: (): ImageSourcePropType =>
    require('./images/ic_flash_active.png'),
  icFlip: (): ImageSourcePropType => require('./images/ic_flip.png'),
  icFlipActive: (): ImageSourcePropType =>
    require('./images/ic_flip_active.png'),
  icFoward: (): ImageSourcePropType => require('./images/ic_foward.png'),
  icLinkArrow: (): ImageSourcePropType => require('./images/ic_link_arrow.png'),
  icLocation: (): ImageSourcePropType => require('./images/ic_location.png'),
  icMenu: (): ImageSourcePropType => require('./images/ic_menu.png'),
  icMicrophone: (): ImageSourcePropType =>
    require('./images/ic_microphone.png'),
  icMyTips: (): ImageSourcePropType => require('./images/ic_my_tips.png'),
  icNewTip: (): ImageSourcePropType => require('./images/ic_new_tip.png'),
  icNotFound: (): ImageSourcePropType => require('./images/ic_not_found.png'),
  icPause: (): ImageSourcePropType => require('./images/ic_pause.png'),
  icPhoneCall: (): ImageSourcePropType => require('./images/ic_phone_call.png'),
  icPhoneCall911: (): ImageSourcePropType =>
    require('./images/ic_phone_call_911.png'),
  icPhoneCallSelected: (): ImageSourcePropType =>
    require('./images/ic_phone_call_selected.png'),
  icPlay: (): ImageSourcePropType => require('./images/ic_play.png'),
  icPlayerAlert: (): ImageSourcePropType =>
    require('./images/ic_player_alert.png'),
  icPlayerShare: (): ImageSourcePropType =>
    require('./images/ic_player_share.png'),
  icRecenterActive: (): ImageSourcePropType =>
    require('./images/ic_recenter_active.png'),
  icRecenterDefault: (): ImageSourcePropType =>
    require('./images/ic_recenter_default.png'),
  icSetting: (): ImageSourcePropType => require('./images/ic_setting.png'),
  icSettingSelected: (): ImageSourcePropType =>
    require('./images/ic_setting_selected.png'),
  icSliderButton: (): ImageSourcePropType =>
    require('./images/ic_slider_button.png'),
  icSliderTrack: (): ImageSourcePropType =>
    require('./images/ic_slider_track.png'),
  icSuccess: (): ImageSourcePropType => require('./images/ic_success.png'),
  icTrash: (): ImageSourcePropType => require('./images/ic_trash.png'),
  icWarning: (): ImageSourcePropType => require('./images/ic_warning.png'),
  icApp: (): ImageSourcePropType => require('./images/ic_app.png'),
  logo: (): ImageSourcePropType => sdkConfigs.logo.logo_path == "" ? require('./images/logo.png') : sdkConfigs.logo.logo_path,
  // logoWithText: (): ImageSourcePropType =>  require('./images/logo_with_text.png'),
  // logoWhiteWithText: (): ImageSourcePropType => require('./images/logo_white_with_text.png'),
  logoWithText: (): ImageSourcePropType =>  sdkConfigs.logo.logo_with_text_path == "" ? require('./images/logo_with_text.png') : sdkConfigs.logo.logo_with_text_path,
  logoWhiteWithText: (): ImageSourcePropType => sdkConfigs.logo.logo_white_with_text_path == "" ? require('./images/logo_white_with_text.png') : sdkConfigs.logo.logo_white_with_text_path,
  welcomeEmergencyCall: (): ImageSourcePropType =>
    require('./images/welcome_emergencyCall.png'),
  welcomeIncident: (): ImageSourcePropType =>
    require('./images/welcome_incident.png'),
  more: (): ImageSourcePropType => require('./images/more.png'),
  welcomeMap: (): ImageSourcePropType => require('./images/welcome_map.png'),
  welcomeNotify: (): ImageSourcePropType =>
    require('./images/welcome_notify.png'),
  welcomeTimer: (): ImageSourcePropType =>
    require('./images/welcome_timer.png'),
  background: (): ImageSourcePropType => require('./images/background.png'),
  backgroundWhite: (): ImageSourcePropType =>
    require('./images/background_white.png'),
  noUserImage: (): ImageSourcePropType => require('./images/no_user_image.png'),
  siren: (): ImageSourcePropType => require('./images/siren.png'),
  tutorial: (): ImageSourcePropType => require('./images/img_valert_tutorial.png'),
  plusImage: (): ImageSourcePropType => require('./images/img_plus_checkbox.png')
};

export default images;
