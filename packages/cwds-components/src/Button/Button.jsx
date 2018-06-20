import React, { Component } from 'react';
import ButtonUnstyled from 'reactstrap/lib/Button';
import Styles from './Button.module.scss';
import { withCssModule } from '../utils';

const Button = withCssModule(ButtonUnstyled, Styles, 'size');

export { Button, ButtonUnstyled };

export default Button;
