import React, { Component } from 'react';
import { FormGroup as FormGroupUnstyled } from 'reactstrap';
import Styles from '../Forms/Forms.module.scss';

const FormGroup = props => <FormGroupUnstyled {...props} />;
FormGroup.propTypes = { ...FormGroupUnstyled.propTypes };
FormGroup.defaultProps = {
  ...FormGroupUnstyled.defaultProps,
  cssModule: Styles,
};

export default FormGroup;
