import React, { Component } from 'react';
import FormFeedbackUnstyled from 'reactstrap/lib/FormFeedback';
import Styles from './Forms.module.scss';
import { withCssModule } from '../utils';

const FormFeedback = withCssModule(FormFeedbackUnstyled, Styles);

export { FormFeedback, FormFeedbackUnstyled };

export default FormFeedback;
