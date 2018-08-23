import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Avatar.module.scss';

const propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  text: PropTypes.string,
  invert: PropTypes.bool,
};

const defaultProps = {
  size: 'md',
};

const Avatar = ({ imgUrl, size, text, invert }) => {
  const classes = cn(styles.wrapper, styles[`size-${size}`], {
    [styles.inverted]: invert,
  });
  if (imgUrl) {
    return <img src={imgUrl} className={classes} />;
  }
  if (text) {
    return (
      <div className={classes}>
        <div className={cn(styles.inner)}>{text}</div>
      </div>
    );
  }
  return (
    <div className={classes}>
      <Icon icon="user" className={cn(styles.inner)} />
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
