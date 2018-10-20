import React from 'react';
import PropTypes from 'prop-types';
import { themeColors } from '@cwds/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadIcons from './icon-library';

// Side Effect
loadIcons();

const Icon = props => {
  const { name, icon, ...restProps } = props;
  return (
    <FontAwesomeIcon focusable="false" icon={name || icon} {...restProps} />
  );
};
Icon.propTypes = { ...FontAwesomeIcon.propTypes };
Icon.defaultProps = {
  ...FontAwesomeIcon.defaultProps,
  color: themeColors.info,
};

export default Icon;
