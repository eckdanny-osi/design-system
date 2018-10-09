function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react'; // export default function withCSSModule(WrappedComponent, cssModule = bootstrap) {
//   return class extends Component {
//     render() {
//       return <WrappedComponent {...this.props} cssModule={cssModule} />;
//     }
//   };
// }

function withCssModule(WrappedComponent, style) {
  debugger;
  const propTypes = WrappedComponent.propTypes || {};
  const defaultProps = WrappedComponent.defaultProps || {};

  const {
    cssModule: __cssModulePropType
  } = propTypes,
        parentPropTypes = _objectWithoutProperties(propTypes, ["cssModule"]);

  const {
    cssModule: __cssModuleDefaultProp
  } = defaultProps,
        parentDefaultProps = _objectWithoutProperties(defaultProps, ["cssModule"]);

  class WithCssModule extends React.Component {
    render() {
      return React.createElement(WrappedComponent, _extends({}, this.props, {
        cssModule: style
      }));
    }

  }

  WithCssModule.displayName = `WithCssModule(${getDisplayName(WrappedComponent)})`;
  WithCssModule.propTypes = parentPropTypes;
  WithCssModule.defaultProps = parentDefaultProps;
  return WithCssModule;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withCssModule;