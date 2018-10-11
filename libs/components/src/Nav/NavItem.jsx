import React from 'react';
import { NavItem as NavItemUnstyled } from 'reactstrap';
import Styles from './Nav.module.scss';

const NavItem = props => <NavItemUnstyled {...props} />;
NavItem.propTypes = { ...NavItemUnstyled.propTypes };
NavItem.defaultProps = { ...NavItemUnstyled.defaultProps, cssModule: Styles };

export default NavItem;
