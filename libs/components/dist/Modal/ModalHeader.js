function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// import React, { Component } from 'react';
// import ModalHeaderUnstyled from 'reactstrap/lib/ModalHeader';
// export class Modal extends Component {
//   render() {
//     const { cssModule, ...props } = this.props;
//     return <ModalHeaderUnstyled cssModule={Styles} {...props} />;
//   }
// }
// export { ModalHeaderUnstyled };
// export default Modal;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Icon, { ICON_NAMES } from '../Icon';
import Styles from "./Modal.module.css";
const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string
};
const defaultProps = {
  tag: 'h5',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

const ModalHeaderUnstyled = props => {
  let closeButton;

  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    closeClassName
  } = props,
        attributes = _objectWithoutProperties(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "closeClassName"]);

  const classes = mapToCssModules(classNames(className, 'modal-header'), cssModule);

  if (toggle) {
    // closeButton = (
    //   <button
    //     type="button"
    //     onClick={toggle}
    //     className={mapToCssModules('close', cssModule)}
    //     aria-label={closeAriaLabel}
    //   >
    //     <span aria-hidden="true">{String.fromCharCode(215)}</span>
    //   </button>
    // );
    closeButton = React.createElement("button", {
      type: "button",
      className: mapToCssModules(classNames('close', closeClassName), Styles),
      "aria-label": closeAriaLabel,
      onClick: toggle,
      style: {
        fontSize: '15px',
        padding: '12px'
      }
    }, React.createElement(Icon, {
      icon: "times"
    }));
  }

  return React.createElement(WrapTag, _extends({}, attributes, {
    className: classes
  }), React.createElement(Tag, {
    className: mapToCssModules('modal-title', cssModule)
  }, children), closeButton);
};

ModalHeaderUnstyled.propTypes = propTypes;
ModalHeaderUnstyled.defaultProps = defaultProps;
export class Modal extends Component {
  render() {
    const _this$props = this.props,
          {
      cssModule
    } = _this$props,
          props = _objectWithoutProperties(_this$props, ["cssModule"]);

    return React.createElement(ModalHeaderUnstyled, _extends({
      cssModule: Styles
    }, props));
  }

}
export { ModalHeaderUnstyled };
export default Modal;