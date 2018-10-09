import React, { Component } from 'react';
import { defaultProps } from 'recompose';
import ColUnstyled from 'reactstrap/lib/Col';
import Styles from "./Col.module.css";
export { ColUnstyled };
export const Col = defaultProps({
  cssModule: Styles
})(ColUnstyled);
export default Col;