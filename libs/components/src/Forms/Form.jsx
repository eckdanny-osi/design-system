import React from 'react';
import { Form as FormUnstyled } from 'reactstrap';
import Styles from './Forms.module.scss';

const Form = props => <FormUnstyled {...props} />;
Form.propTypes = { ...FormUnstyled.propTypes };
Form.defaultProps = { ...FormUnstyled.defaultProps, cssModule: Styles };

export default Form;
