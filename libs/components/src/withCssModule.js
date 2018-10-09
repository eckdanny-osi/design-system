import React, { Component } from 'react';

// export default function withCSSModule(WrappedComponent, cssModule = bootstrap) {
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
  const { cssModule: __cssModulePropType, ...parentPropTypes } = propTypes;
  const {
    cssModule: __cssModuleDefaultProp,
    ...parentDefaultProps
  } = defaultProps;
  class WithCssModule extends React.Component {
    render() {
      return <WrappedComponent {...this.props} cssModule={style} />;
    }
  }
  WithCssModule.displayName = `WithCssModule(${getDisplayName(
    WrappedComponent
  )})`;
  WithCssModule.propTypes = parentPropTypes;
  WithCssModule.defaultProps = parentDefaultProps;
  return WithCssModule;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withCssModule;
