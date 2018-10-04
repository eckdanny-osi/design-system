import React from 'react';
import getDisplayName from 'recompose/getDisplayName';
import NavItemUnstyled from 'reactstrap/lib/NavItem';
import Styles from './Nav.module.scss';

const NavItem = props => <NavItemUnstyled {...props} />;
NavItem.displayName = `cares(${getDisplayName(NavItemUnstyled)})`;
NavItem.propTypes = { ...NavItemUnstyled.propTypes };
NavItem.defaultProps = { ...NavItemUnstyled.defaultProps, cssModule: Styles };

export default NavItem;
