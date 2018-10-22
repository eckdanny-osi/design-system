import React, { Component } from 'react'
import PopoverHeaderUnstyled from 'reactstrap/lib/PopoverHeader'
import Styles from './Popover.module.scss'

export class PopoverHeader extends Component {
  render() {
    const { cssModule, ...props } = this.props
    return <PopoverHeaderUnstyled cssModule={Styles} {...props} />
  }
}

export { PopoverHeaderUnstyled }

export default PopoverHeader
