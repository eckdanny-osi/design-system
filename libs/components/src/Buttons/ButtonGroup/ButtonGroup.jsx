import React from 'react'
import { ButtonGroup as ButtonGroupUnstyled } from 'reactstrap'
import Styles from '../Buttons.module.scss'

const ButtonGroup = props => <ButtonGroupUnstyled {...props} />
ButtonGroup.propTypes = { ...ButtonGroupUnstyled.propTypes }
ButtonGroup.defaultProps = {
  ...ButtonGroupUnstyled.defaultProps,
  cssModule: Styles,
}

export default ButtonGroup
