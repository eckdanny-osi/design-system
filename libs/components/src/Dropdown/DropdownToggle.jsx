import React from 'react';
import { DropdownToggle as DropdownToggleUnstyled } from 'reactstrap';
import Styles from './Dropdown.module.scss';

const DropdownToggle = props => <DropdownToggleUnstyled {...props} />;
DropdownToggle.propTypes = { ...DropdownToggleUnstyled.propTypes };
DropdownToggle.defaultProps = {
  ...DropdownToggleUnstyled.defaultProps,
  cssModule: Styles,
};

export default DropdownToggle;
