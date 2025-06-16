"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _formik = require("formik");
var _react = _interopRequireDefault(require("react"));
var _reactNativeCheckBox = _interopRequireDefault(require("react-native-check-box"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CheckBoxField = ({
  name
}) => {
  const {
    setFieldValue
  } = (0, _formik.useFormikContext)();
  const [field] = (0, _formik.useField)(name);
  return /*#__PURE__*/_react.default.createElement(_reactNativeCheckBox.default, {
    isChecked: field.value,
    onClick: () => setFieldValue(name, !field.value),
    checkedImage: /*#__PURE__*/_react.default.createElement(CheckboxImage, {
      source: _assets.images.icCheckboxActive()
    }),
    unCheckedImage: /*#__PURE__*/_react.default.createElement(CheckboxImage, {
      source: _assets.images.icCheckbox()
    })
  });
};
const CheckboxImage = _styled.default.Image`
  height: 30px;
  width: 30px;
`;
var _default = exports.default = CheckBoxField;
//# sourceMappingURL=index.js.map