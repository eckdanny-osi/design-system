import React, { Component } from 'react';
import FormFeedbackUnstyled from 'reactstrap/lib/FormFeedback';
import Styles from "../Forms/Forms.module.css";
import { withCssModule } from '../utils';
const FormFeedback = withCssModule(FormFeedbackUnstyled, Styles);
export { FormFeedback, FormFeedbackUnstyled };
export default FormFeedback;