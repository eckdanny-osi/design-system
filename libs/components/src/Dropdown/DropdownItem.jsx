import React from 'react';
import { DropdownItem as DropdownItemUnstyled } from 'reactstrap';
import Styles from './Dropdown.module.scss';

const DropdownItem = props => <DropdownItemUnstyled {...props} />;
DropdownItem.propTypes = { ...DropdownItemUnstyled.propTypes };
DropdownItem.defaultProps = {
  ...DropdownItemUnstyled.defaultProps,
  cssModule: Styles,
};

export default DropdownItem;
