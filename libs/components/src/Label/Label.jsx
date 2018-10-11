import React, { Component } from 'react';
import { Label as LabelUnstyled } from 'reactstrap';
import Styles from '../Forms//Forms.module.scss';

const Label = props => <LabelUnstyled {...props} />;
Label.propTypes = { ...LabelUnstyled.propTypes };
Label.defaultProps = { ...LabelUnstyled.defaultProps, cssModule: Styles };

export default Label;
