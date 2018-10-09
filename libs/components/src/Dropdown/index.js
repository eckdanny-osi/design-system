import styles from './Dropdown.module.scss';
import { withCssModule } from '../utils';

import {
  UncontrolledDropdown as RSUncontrolledDropdown,
  DropdownToggle as RSDropdownToggle,
  DropdownMenu as RSDropdownMenu,
  DropdownItem as RSDropdownItem,
} from 'reactstrap';

export const UncontrolledDropdown = withCssModule(
  RSUncontrolledDropdown,
  styles
);

// export { RSDropdownToggle as DropdownToggle };
// export { RSDropdownMenu as DropdownMenu };
// export { RSDropdownItem as DropdownItem };

// export const UncontrolledDropdown = withCssModule(
//   RSUncontrolledDropdown,
//   styles
// );
export const DropdownToggle = withCssModule(RSDropdownToggle, styles);
export const DropdownMenu = withCssModule(RSDropdownMenu, styles);
export const DropdownItem = withCssModule(RSDropdownItem, styles);
