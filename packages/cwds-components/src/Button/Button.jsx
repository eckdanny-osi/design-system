import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Button as RSButton } from 'reactstrap';
import { KINDS } from '@cwds/core';
import withCssModule from '../withCssModule';
import styles from './Button.scss';
import pick from 'lodash.pick';
import omit from 'lodash.omit';

const WHITELISTED_PROPS = [
  'active',
  // 'block',
  'color',
  'disabled',
  // 'outline',
  'tag',
  'innerRef',
  'onClick',
  // 'size',
  'children',
  'className',
  'cssModule',
];

// function withoutProps(WrappedComponent, propList) {
//   class WithoutProps extends Component {
//     render() {
//       const otherProps = pick(this.props, propList);
//       return <WrappedComponent {...otherProps} />;
//     }
//   }
//   WithoutProps.propTypes = pick(WrappedComponent.propTypes, propList);
//   WithoutProps.defaultProps = pick(WrappedComponent.defaultProps, propList);
//   return WithoutProps;
// }

// function withPropAdapter(WrappedComponent, propFn) {
//   return function(props) {
//     return <WrappedComponent {...propFn(props)} />;
//   };
// }

// export default withoutProps(withCssModule(RSButton, styles), WHITELISTED_PROPS);

// export default withPropAdapter(withCssModule(RSButton, styles), props => {
//   const { primary, secondary, warning, ...passThroughProps } = props;
//   const color =
//     (warning && 'warning') ||
//     (primary && 'primary') ||
//     (secondary && 'secondary');
//   return { color, ...props };
// });

function withPropAdapter(
  WrappedComponent,
  adapterFn,
  propTypeFn,
  defaultPropFn
) {
  class WithPropAdapter extends Component {
    render() {
      return <WrappedComponent {...adapterFn(this.props)} />;
    }
  }
  WithPropAdapter.propTypes = propTypeFn(WrappedComponent.propTypes);
  WithPropAdapter.defaultProps = defaultPropFn(WrappedComponent.defaultProps);
  WithPropAdapter.displayName = 'Button';
  return WithPropAdapter;
}

const adapterFn = props => {
  const {
    primary,
    warning,
    color: _,
    outline,
    block,
    ...passThroughProps
  } = props;
  // order conditional style by logical severity
  const color = (warning && 'warning') || (primary && 'primary') || 'secondary';
  return { color, ...passThroughProps };
};

const propTypeFn = propTypes => {
  const { color, size, outline, block, ...props } = propTypes;
  return {
    primary: PropTypes.bool,
    warning: PropTypes.bool,
    ...props,
  };
};

const defaultPropsFn = defaultProps => {
  const { color, size, outline, block, ...props } = defaultProps;
  return {
    primary: false,
    warning: false,
    ...defaultProps,
  };
};

export default withPropAdapter(
  withCssModule(RSButton, styles),
  adapterFn,
  propTypeFn,
  defaultPropsFn
);

// const propTypes = {
//   /** Render as primary */
//   primary: PropTypes.bool,
//   /** Warning */
//   warning: PropTypes.bool,
//   /** Disabled stuff... */
//   disabled: PropTypes.bool,
//   /** Block stuff... */
//   block: PropTypes.bool,
// };

// const defaultProps = {
//   primary: false,
//   warning: false,
//   disabled: false,
//   block: false,
// };

// const Button = ({
//   block,
//   children,
//   warning,
//   disabled,
//   href,
//   primary,
//   ...props
// }) => {
//   const Tag = href ? 'a' : 'button';
//   return (
//     <Tag
//       className={cn(styles.btn, {
//         [styles['btn-secondary']]: !primary && !warning,
//         [styles['btn-primary']]: primary,
//         [styles['btn-warning']]: warning,
//         [styles['btn-block']]: block,
//       })}
//       children={children}
//       disabled={disabled}
//       {...props}
//     />
//   );
// };

// Button.propTypes = propTypes;
// Button.defaultProps = defaultProps;

// export default Button;
