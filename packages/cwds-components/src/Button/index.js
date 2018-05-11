import React, { Component } from 'react';
import ButtonUnstyled from './Button';
import styles from './Button.module.scss';

export class Button extends Component {
  render() {
    const { cssModule = {}, ...props } = this.props;
    return <ButtonUnstyled cssModule={styles} {...props} />;
  }
}

export { ButtonUnstyled };

export default Button;
