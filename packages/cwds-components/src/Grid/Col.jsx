import React, { Component } from 'react';
import { defaultProps } from 'recompose';
import ColUnstyled from 'reactstrap/lib/Col';
import styles from './Col.module.scss';

export { ColUnstyled };
export const Col = defaultProps({ cssModule: styles })(ColUnstyled);
export default Col;
