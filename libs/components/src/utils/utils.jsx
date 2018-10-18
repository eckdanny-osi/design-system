import React, { Component } from 'react';
import omit from 'lodash.omit';
// import getDisplayName from 'react-display-name';
// import hoistNonReactStatics from 'hoist-non-react-statics';

// export function withPropAdapter(
//   WrappedComponent,
//   adapterFn,
//   propTypeFn,
//   defaultPropFn,
//   displayName
// ) {
//   class WithPropAdapter extends Component {
//     render() {
//       return <WrappedComponent {...adapterFn(this.props)} />;
//     }
//   }
//   WithPropAdapter.propTypes = propTypeFn(WrappedComponent.propTypes);
//   WithPropAdapter.defaultProps = defaultPropFn(WrappedComponent.defaultProps);
//   WithPropAdapter.displayName = displayName;
//   return WithPropAdapter;
// }

function getProps(props, ...omits) {
  return omit(props, omits);
}
