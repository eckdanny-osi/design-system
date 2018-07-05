import React, { Component } from 'react';
import FormGroupUnstyled from 'reactstrap/lib/FormGroup';
import Styles from './Forms.module.scss';
import { withCssModule } from '../utils';

const FormGroup = withCssModule(FormGroupUnstyled, Styles);

export { FormGroup, FormGroupUnstyled };

export default FormGroup;
