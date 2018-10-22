import React from 'react'
import NavLinkUnstyled from 'reactstrap/lib/NavLink'
import Styles from './Nav.module.scss'

const NavLink = props => <NavLinkUnstyled {...props} />
NavLink.propTypes = { ...NavLinkUnstyled.propTypes }
NavLink.defaultProps = { ...NavLinkUnstyled.defaultProps, cssModule: Styles }

export default NavLink
