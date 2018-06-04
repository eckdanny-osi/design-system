import React, { Component } from 'react';
import ModalUnstyled from 'reactstrap/lib/Modal';
import Styles from './Modal.module.scss';

import Header from './ModalHeader';
import Body from './ModalBody';
import Footer from './ModalFooter';

export class Modal extends Component {
  render() {
    const { cssModule, fade, ...props } = this.props;
    return <ModalUnstyled cssModule={Styles} fade={false} {...props} />;
  }
}

export { ModalUnstyled };

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
