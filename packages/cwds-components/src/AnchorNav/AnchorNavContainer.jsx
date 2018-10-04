import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from '../';

export default ({ renderNav, renderMain }) => {
  return (
    <Row>
      <Col md="4" lg="3">
        {renderNav()}
      </Col>
      <Col md="8" lg="9">
        {renderMain()}
      </Col>
    </Row>
  );
};
