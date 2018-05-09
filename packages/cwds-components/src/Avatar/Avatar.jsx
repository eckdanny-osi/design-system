import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Avatar.module.scss';

const propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
};

const defaultProps = {
  size: 'md',
};

const Avatar = ({ imgUrl, size }) => {
  const classes = cn(styles.avatar, size && `avatar-${size}`);
  return imgUrl ? (
    <img src={imgUrl} className={classes} />
  ) : (
    <Icon icon="user" size="2x" className={classes} />
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
