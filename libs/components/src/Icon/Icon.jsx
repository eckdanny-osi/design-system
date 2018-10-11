import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheck,
  faTimes,
  faUser,
  faSearch,
  faSpinner,
  faUpload,
  faCircleNotch,
  faCheckCircle,
  faPlusCircle,
  faInfoCircle,
  faExclamationTriangle,
  faChevronDown,
  faEllipsisV,
  faPlus,
  faMinus,
  faLightbulb,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import Styles from './Icon.module.scss';

library.add(
  faCheck,
  faTimes,
  faUser,
  faSearch,
  faSpinner,
  faUpload,
  faCircleNotch,
  faCheckCircle,
  faPlusCircle,
  faInfoCircle,
  faExclamationTriangle,
  faChevronDown,
  faEllipsisV,
  faPlus,
  faMinus,
  faLightbulb,
  faArrowUp
);

const Icon = props => (
  <FontAwesomeIcon
    className={cn(Styles['color-primary'])}
    focusable="false"
    {...props}
  />
);
Icon.propTypes = { ...FontAwesomeIcon.propTypes };
Icon.defaultProps = { ...FontAwesomeIcon.defaultProps };

export default Icon;

export const ICON_NAMES = {
  check: 'check',
  times: 'times',
  spinner: 'spinner',
  upload: 'upload',
  circleNotch: 'circle-notch',
  checkCircle: 'check-circle',
  infoCircle: 'info-circle',
  error: 'error',
  user: 'user',
  search: 'search',
  chevronDown: 'chevron-down',
  plus: 'plus',
  minus: 'minus',
  plusCircle: 'plus-circle',
  ellipsis: 'ellipsis',
  lightbulb: 'lightbulb',
  arrowUp: 'arrow-up',
};
