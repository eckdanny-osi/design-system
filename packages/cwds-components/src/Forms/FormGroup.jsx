import React, { Component } from 'react';
import { withProps } from 'recompose';
import FormGroupUnstyled from 'reactstrap/lib/FormGroup';
import Styles from './Forms.module.scss';

const FormGroup = withProps({ cssModule: Styles })(FormGroupUnstyled);

export { FormGroup, FormGroupUnstyled };

export default FormGroup;
