import React, { Component } from 'react';
import ColUnstyled from 'reactstrap/lib/Col';
import { withCssModule } from '../utils';
import Styles from './Col.module.scss';

const Col = withCssModule(ColUnstyled, Styles);

export { Col, ColUnstyled };
export default Col;
