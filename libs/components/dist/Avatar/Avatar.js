import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon';
import Styles from "./Avatar.module.css";
import { SIZES_ALL, isValidSize } from '../utils/design-system';
const propTypes = {
  /** Image URL (eg; img[src]) */
  imgUrl: PropTypes.string,

  /** DS size enum */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /** Text fallback (e.g. initials) */
  text: PropTypes.string,

  /** Invert the color scheme? */
  invert: PropTypes.bool
};
const defaultProps = {
  size: 'md',
  invert: false
};

const Avatar = ({
  imgUrl,
  size,
  text,
  invert
}) => {
  const classes = cn(Styles['wrapper'], Styles[`size-${isValidSize(size, SIZES_ALL.MD)}`], {
    [Styles.inverted]: invert
  });

  if (imgUrl) {
    return React.createElement("img", {
      src: imgUrl,
      className: classes
    });
  }

  if (text) {
    return React.createElement("div", {
      className: classes
    }, React.createElement("div", {
      className: cn(Styles.inner)
    }, text));
  }

  return React.createElement("div", {
    className: classes
  }, React.createElement(Icon, {
    icon: "user",
    className: cn(Styles.inner)
  }));
};

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
export default Avatar;