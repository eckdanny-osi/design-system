import React, { Component } from 'react';

export function withPropAdapter(
  WrappedComponent,
  adapterFn,
  propTypeFn,
  defaultPropFn,
  displayName
) {
  class WithPropAdapter extends Component {
    render() {
      return <WrappedComponent {...adapterFn(this.props)} />;
    }
  }
  WithPropAdapter.propTypes = propTypeFn(WrappedComponent.propTypes);
  WithPropAdapter.defaultProps = defaultPropFn(WrappedComponent.defaultProps);
  WithPropAdapter.displayName = displayName;
  return WithPropAdapter;
}

export function withCssModule(WrappedComponent, style) {
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

export function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
