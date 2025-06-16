/**
 * SettingScreen messages
 *
 * This contains all the text for the SettingScreen component.
 */

import { defineMessages } from 'react-intl';
export const scope = 'containers.settingScreen';
const messages = defineMessages({
  title: {
    id: `${scope}.title`
  },
  connect: {
    id: `${scope}.beaconSetUp`
  },
  connectionSuccessful: {
    id: `${scope}.beaconSetUpSuccessful`
  },
  step1: {
    id: `${scope}.step1`
  },
  step1_desc: {
    id: `${scope}.step1_desc`
  },
  timing: {
    id: `${scope}.timing`
  },
  step2: {
    id: `${scope}.step2`
  },
  bullet: {
    id: `${scope}.bullet`
  },
  batteryLevel: {
    id: `${scope}.battery_level`
  }
});
export default messages;
//# sourceMappingURL=messages.js.map