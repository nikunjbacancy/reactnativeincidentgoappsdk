"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scope = exports.default = void 0;
var _reactIntl = require("react-intl");
/**
 * WelcomeScreen Messages
 *
 * This contains all the text for the WarningScreen component.
 */

const scope = exports.scope = 'containers.welcomeScreen';
const messages = (0, _reactIntl.defineMessages)({
  emergencyText: {
    id: `${scope}.emergency.text`
  },
  emergencyTitle: {
    id: `${scope}.emergency.title`
  },
  liveText: {
    id: `${scope}.live.text`
  },
  liveTitle: {
    id: `${scope}.live.title`
  },
  safetyText: {
    id: `${scope}.safety.text`
  },
  safetyTitle: {
    id: `${scope}.safety.title`
  },
  panicText: {
    id: `${scope}.panic.text`
  },
  panicTitle: {
    id: `${scope}.panic.title`
  },
  tipText: {
    id: `${scope}.tip.text`
  },
  tipTitle: {
    id: `${scope}.tip.title`
  },
  skip: {
    id: `${scope}.skip`
  }
});
var _default = exports.default = messages;
//# sourceMappingURL=messages.js.map