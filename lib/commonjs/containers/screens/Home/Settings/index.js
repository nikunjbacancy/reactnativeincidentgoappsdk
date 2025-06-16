"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _assets = require("../../../../assets");
var _reactNative = require("react-native");
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _api = require("../../../../api");
var _permission = require("../../../../utils/permission");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import Toast from 'react-native-root-toast';

// import { beaconRegistrationRequest } from './actions';
// import { useAction } from '../../../../utils/hooks';
// import { SET_BEACON_DETAILS } from '../../../../containers/screens/Home/Settings/constants';
// import NetInfo from "@react-native-community/netinfo";

// import { checkBluetoothStatus, setUpBeaconInfo } from '../../../../utils/beacon';

const SettingScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  // const beaconRegistration = useAction(beaconRegistrationRequest);
  // const [beaconDetails, setBeaconDetails] = useState({});
  // const [isBeaconConnected, setIsBeaconConnected] = useState(false);
  // const [batteryLevel, setBatteryLevel] = useState("");

  (0, _react.useEffect)(() => {
    (0, _permission.requestActivityRecognitionPermission)();
    (0, _permission.getLocationActionPermissions)();
    // connectToBeacon();
    // event.on(AppEvent.OnBeaconConnection, OnBeaconConnection);
    _api.event.on(_api.AppEvent.OnBatteryLevelReceived, onBatteryLevelReceived);
  }, []);

  // const OnBeaconConnection = (connectivity: boolean) => {
  //     setIsBeaconConnected(connectivity);
  //     if (!connectivity) {
  //         setBatteryLevel("");
  //     }
  // }

  const onBatteryLevelReceived = batteryLevel => {
    if (batteryLevel != "0") {
      // setBatteryLevel(batteryLevel);
    }
  };

  // const connectToBeacon = async () => {
  //     const isEnabled = await checkBluetoothStatus();
  //     if (isEnabled) {
  //         AsyncStorage.getItem(SET_BEACON_DETAILS).then(async (beacons) => {
  //             if (beacons) {
  //                 setBeaconDetails(JSON.parse(beacons));
  //             }
  //             else {
  //                 const beaconInfo = await setUpBeaconInfo();
  //                 setBeaconDetails(beaconInfo);
  //             }
  //         });
  //     }
  // };

  // const registerBeacon = async () => {
  //     NetInfo.fetch().then(async state => {
  //         switch (state.isConnected) {
  //             case true:
  //                 if (!isBeaconConnected) {
  //                     // beaconRegistration(beaconDetails);
  //                 }
  //                 break;
  //             case false:
  //                 Toast.show("Please check your internet connection.", { position: Toast.positions.BOTTOM })
  //                 break;
  //         }
  //     });
  // }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.Background, null, /*#__PURE__*/_react.default.createElement(_styles.Step1, null, formatMessage(_messages.default.step1)), /*#__PURE__*/_react.default.createElement(_styles.Step1_Desc, null, formatMessage(_messages.default.step1_desc)), /*#__PURE__*/_react.default.createElement(_styles.ViewTutorial, null, /*#__PURE__*/_react.default.createElement(_styles.Tutorial, null), /*#__PURE__*/_react.default.createElement(_styles.Timing, null, formatMessage(_messages.default.timing)))), /*#__PURE__*/_react.default.createElement(_styles.Background, null, /*#__PURE__*/_react.default.createElement(_styles.ViewStep2, null, /*#__PURE__*/_react.default.createElement(_styles.Step1, null, formatMessage(_messages.default.step2)),
  /*#__PURE__*/
  // Object.keys(beaconDetails).length != 0 ? <ViewStep22 /> : <Loader /> 
  _react.default.createElement(_styles.Loader, null)),
  /*#__PURE__*/
  // Object.keys(beaconDetails).length != 0 ? <ViewStep2>
  //     <Container>
  //         <PlusImage />
  //         {
  //             batteryLevel != "" ? <ViewStep21>
  //                 {/* <DeviceDetail>{beaconDetails?.name}</DeviceDetail> */}
  //                 <BatteryLevel>{formatMessage(messages.batteryLevel) + ": " + batteryLevel + "%"}</BatteryLevel>
  //             </ViewStep21>
  //                 : <ViewStep21>
  //                     {/* <DeviceDetail>{beaconDetails?.name}</DeviceDetail> */}
  //                 </ViewStep21>
  //         }
  //     </Container>
  //     {/* {isBeaconConnected ? <Bullet>{formatMessage(messages.bullet)}</Bullet> :
  //         <Bullet_Red>{formatMessage(messages.bullet)}</Bullet_Red>} */}
  // </ViewStep2>
  //     : <ViewStep22 />
  _react.default.createElement(_styles.ViewStep22, null))), /*#__PURE__*/_react.default.createElement(_styles.BackButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: () => _navigation.default.navigate(_screens.default.Home.Escort.EscortType),
    tintColor: _assets.colors.white
  }))));
};
var _default = exports.default = SettingScreen;
//# sourceMappingURL=index.js.map