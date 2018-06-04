import React, { Component } from 'react';
import ModalHeaderUnstyled from 'reactstrap/lib/ModalHeader';
import Styles from './Modal.module.scss';

export class Modal extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <ModalHeaderUnstyled cssModule={Styles} {...props} />;
  }
}

export { ModalHeaderUnstyled };

export default Modal;
