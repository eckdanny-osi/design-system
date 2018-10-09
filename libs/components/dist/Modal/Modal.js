function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react';
import ModalUnstyled from 'reactstrap/lib/Modal';
import Styles from "./Modal.module.css";
import Header from './ModalHeader';
import Body from './ModalBody';
import Footer from './ModalFooter';
export class Modal extends Component {
  render() {
    const _this$props = this.props,
          {
      cssModule,
      fade
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["cssModule", "fade"]);

    return React.createElement(ModalUnstyled, _extends({
      cssModule: Styles,
      fade: false
    }, props));
  }

}
export { ModalUnstyled };
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
export default Modal;