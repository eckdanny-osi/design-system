import React, { PureComponent } from 'react';
import Row from './Row';
import Col from './Col';
import Container from './Container';

export class Grid extends PureComponent {
  static Row = Row;
  static Col = Col;
  static Container = Container;
}

export default Grid;
