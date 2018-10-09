import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../';
export default (({
  renderNav,
  renderMain
}) => {
  return React.createElement(Row, null, React.createElement(Col, {
    md: "4",
    lg: "3"
  }, renderNav()), React.createElement(Col, {
    md: "8",
    lg: "9"
  }, renderMain()));
});