import React from 'react';
import getDisplayName from 'recompose/getDisplayName';
import NavUnstyled from 'reactstrap/lib/Nav';
import Styles from './Nav.module.scss';

const Nav = props => <NavUnstyled {...props} />;
Nav.displayName = `cares(${getDisplayName(NavUnstyled)})`;
Nav.propTypes = { ...NavUnstyled.propTypes };
Nav.defaultProps = { ...NavUnstyled.defaultProps, cssModule: Styles };

export default Nav;
