import React, { Component } from 'react'
import ModalBodyUnstyled from 'reactstrap/lib/ModalBody'
import Styles from './Modal.module.scss'

export class Modal extends Component {
  render() {
    const { cssModule, ...props } = this.props
    return <ModalBodyUnstyled cssModule={Styles} {...props} />
  }
}

export { ModalBodyUnstyled }

export default Modal
