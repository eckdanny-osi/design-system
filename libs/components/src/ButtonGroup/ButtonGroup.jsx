import React, { Component } from 'react';
import ButtonGroupUnstyled from 'reactstrap/lib/ButtonGroup';
import cn from 'classnames';
// import PropTypes from 'prop-types';
import Styles from './ButtonGroup.module.scss';

export class ButtonGroup extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <ButtonGroupUnstyled cssModule={Styles} {...props} />;
  }
}

export { ButtonGroupUnstyled };

export default ButtonGroup;
