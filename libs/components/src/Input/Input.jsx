import React from 'react'
import { Input as InputUnstyled } from 'reactstrap'
import Styles from '../Forms/Forms.module.scss'

const Input = props => <InputUnstyled {...props} />
Input.propTypes = { ...InputUnstyled.propTypes }
Input.defaultProps = { ...InputUnstyled.defaultProps, cssModule: Styles }

export default Input
