import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.scss';

const propTypes = {
  /** Render as primary */
  primary: PropTypes.bool,
  /** Danger is as danger does */
  danger: PropTypes.bool,
  /** Outline stuff... */
  outline: PropTypes.bool,
  /** Disabled stuff... */
  disabled: PropTypes.bool,
  /** Block stuff... */
  block: PropTypes.bool,
};

const defaultProps = {
  primary: false,
  danger: false,
  outline: false,
  disabled: false,
  outline: false,
  block: false,
};

const Button = ({
  href,
  disabled,
  outline,
  primary,
  danger,
  block,
  children,
  ...props
}) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      className={cn(styles.btn, {
        [styles.primary]: primary,
        [styles.danger]: danger,
        [styles.outline]: outline,
        [styles['btn-block']]: block,
      })}
      children={children}
      disabled={disabled}
      {...props}
    />
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
