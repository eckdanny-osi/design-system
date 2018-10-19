import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loadIcons from './icon-library';

// Side Effect
loadIcons();

const Icon = props => <FontAwesomeIcon focusable="false" {...props} />;
Icon.propTypes = { ...FontAwesomeIcon.propTypes };
Icon.defaultProps = {
  ...FontAwesomeIcon.defaultProps,
  color: '#00517a',
};

export default Icon;
