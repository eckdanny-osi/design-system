import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';

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
