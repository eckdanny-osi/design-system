import React, { Component } from 'react';
import omit from 'lodash.omit';
import getDisplayName from 'react-display-name';
import hoistNonReactStatics from 'hoist-non-react-statics';

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

function getProps(props, ...omits) {
  return omit(props, omits);
}

export function withCssModule(Wrapped, cssModule, ...omittedProps) {
  class WithCssModule extends Component {
    render() {
      return (
        <Wrapped
          {...getProps(this.props, 'cssModule', ...omittedProps)}
          cssModule={cssModule}
        />
      );
    }
  }
  WithCssModule.propTypes = omit(
    Wrapped.propTypes,
    'cssModule',
    ...omittedProps
  );
  WithCssModule.defaultProps = omit(
    Wrapped.defaultProps,
    'cssModule',
    ...omittedProps
  );
  hoistNonReactStatics(WithCssModule, Wrapped);
  WithCssModule.displayName = `withCssModule(${getDisplayName(Wrapped)})`;
  return WithCssModule;
}
