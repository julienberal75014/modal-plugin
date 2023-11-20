"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function Modal(_ref) {
  let {
    title = "",
    content,
    buttons = [],
    onClose,
    customStyle
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(true);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };
  const handleOutsideClick = e => {
    if (e.target.className === "modal open") {
      handleClose();
    }
  };
  window.addEventListener("click", handleOutsideClick);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal ".concat(isOpen ? "open" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "button-header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#000000"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "SVGRepo_bgCarrier",
    "stroke-width": "0"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "SVGRepo_tracerCarrier",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), /*#__PURE__*/_react.default.createElement("g", {
    id: "SVGRepo_iconCarrier"
  }, " ", /*#__PURE__*/_react.default.createElement("g", {
    id: "Menu / Close_MD"
  }, " ", /*#__PURE__*/_react.default.createElement("path", {
    id: "Vector",
    d: "M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18",
    stroke: "#ffff",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), " "), " ")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.title
  }, title)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement("p", {
    style: customStyle === null || customStyle === void 0 ? void 0 : customStyle.content
  }, content)), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-buttons"
  }, buttons.map((button, index) => /*#__PURE__*/_react.default.createElement("button", {
    key: index,
    onClick: button.onClick,
    style: button.style
  }, button.label)))));
}
var _default = exports.default = Modal;