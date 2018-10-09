import React, { Component } from 'react';
import InputUnstyled from 'reactstrap/lib/Input';
import Styles from "../Forms/Forms.module.css";
import { withCssModule } from '../utils';
const Input = withCssModule(InputUnstyled, Styles);
export { Input, InputUnstyled };
export default Input;