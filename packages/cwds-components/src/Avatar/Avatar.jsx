import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import styles from './Avatar.module.scss';

const propTypes = {
  imgUrl: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  text: PropTypes.string,
  invert: PropTypes.bool,
};

const defaultProps = {
  size: 'md',
};

const Avatar = ({ imgUrl, size, text, invert }) => {
  const classes = cn(styles.avatar, styles[`size-${size}`], {
    [styles.inverted]: invert,
  });
  if (imgUrl) {
    return <img src={imgUrl} className={classes} />;
  }
  if (text) {
    return (
      <div className={classes}>
        <div className={cn(styles.avatarInitials)}>{text}</div>
      </div>
    );
  }
  return (
    <div className={classes}>
      <Icon icon="user" size="2x" className={cn(styles.avatarInitials)} />
    </div>
  );
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
