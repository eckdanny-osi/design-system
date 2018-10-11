import React from 'react';
import { FormFeedback as FormFeedbackUnstyled } from 'reactstrap';
import Styles from '../Forms/Forms.module.scss';

const FormFeedback = props => <FormFeedbackUnstyled {...props} />;
FormFeedback.propTypes = { ...FormFeedbackUnstyled.propTypes };
FormFeedback.defaultProps = {
  ...FormFeedbackUnstyled.defaultProps,
  cssModule: Styles,
};

export default FormFeedback;
