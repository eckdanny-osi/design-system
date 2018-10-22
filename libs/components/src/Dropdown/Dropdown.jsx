import React from 'react'
import { Dropdown as DropdownUnstyled } from 'reactstrap'
import Styles from './Dropdown.module.scss'

const Dropdown = props => <DropdownUnstyled {...props} />
Dropdown.propTypes = { ...DropdownUnstyled.propTypes }
Dropdown.defaultProps = { ...DropdownUnstyled.defaultProps, cssModule: Styles }

export default Dropdown
