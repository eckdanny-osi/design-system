import React from 'react'
import cn from 'classnames'
import { Button as ButtonUnstyled } from 'reactstrap'
import Styles from '../Buttons.module.scss'

const Button = props => <ButtonUnstyled {...props} />
Button.defaultProps = { ...ButtonUnstyled.defaultProps, cssModule: Styles }

export default Button
