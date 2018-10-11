import React from 'react';
import { DropdownMenu as DropdownMenuUnstyled } from 'reactstrap';
import Styles from './Dropdown.module.scss';

const DropdownMenu = props => <DropdownMenuUnstyled {...props} />;
DropdownMenu.propTypes = { ...DropdownMenuUnstyled.propTypes };
DropdownMenu.defaultProps = {
  ...DropdownMenuUnstyled.defaultProps,
  cssModule: Styles,
};

export default DropdownMenu;
