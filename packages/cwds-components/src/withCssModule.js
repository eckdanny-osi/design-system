import React, { Component } from 'react';

// export default function withCSSModule(WrappedComponent, cssModule = bootstrap) {
//   return class extends Component {
//     render() {
//       return <WrappedComponent {...this.props} cssModule={cssModule} />;
//     }
//   };
// }

function withCssModule(WrappedComponent, style) {
  const {
    cssModule: __cssModulePropType,
    ...parentPropTypes
  } = WrappedComponent.propTypes;
  const {
    cssModule: __cssModuleDefaultProp,
    ...parentDefaultProps
  } = WrappedComponent.defaultProps;
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
