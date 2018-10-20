import React from 'react';
import PropTypes from 'prop-types';
import { themeColors } from '@cwds/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadIcons from './icon-library';

// Side Effect
loadIcons();

const Icon = props => {
  const { name, icon, color, themeColors, ...restProps } = props;
  return (
    <FontAwesomeIcon
      focusable="false"
      icon={name || icon}
      color={themeColors[color] || color}
      {...restProps}
    />
  );
};
Icon.propTypes = { ...FontAwesomeIcon.propTypes };
Icon.defaultProps = {
  ...FontAwesomeIcon.defaultProps,
  color: 'info',
  themeColors: themeColors,
};

export default Icon;
