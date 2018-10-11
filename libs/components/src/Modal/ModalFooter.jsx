import React, { Component } from 'react';
import ModalFooterUnstyled from 'reactstrap/lib/ModalFooter';
import Styles from './Modal.module.scss';

export class Modal extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <ModalFooterUnstyled cssModule={Styles} {...props} />;
  }
}

export { ModalFooterUnstyled };

export default Modal;
