import React from 'react';
import NavUnstyled from 'reactstrap/lib/Nav';
import Styles from './Nav.module.scss';

const Nav = props => <NavUnstyled {...props} />;
Nav.propTypes = { ...NavUnstyled.propTypes };
Nav.defaultProps = { ...NavUnstyled.defaultProps, cssModule: Styles };

export default Nav;
