import React, { Component } from 'react';
import { defaultProps } from 'recompose';
import RowUnstyled from 'reactstrap/lib/Row';
import styles from "./Row.module.css";
export { RowUnstyled };
export const Row = defaultProps({
  cssModule: styles
})(RowUnstyled);
export default Row;