import React, { Component } from 'react';
import FormUnstyled from 'reactstrap/lib/Form';
import Styles from './Forms.module.scss';
import { withCssModule } from '../utils';

const Form = withCssModule(FormUnstyled, Styles);

export { Form, FormUnstyled };

export default Form;
