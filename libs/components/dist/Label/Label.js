import React, { Component } from 'react';
import LabelUnstyled from 'reactstrap/lib/Label';
import Styles from "../Forms//Forms.module.css";
import { withCssModule } from '../utils';
const Label = withCssModule(LabelUnstyled, Styles);
export { Label, LabelUnstyled };
export default Label;