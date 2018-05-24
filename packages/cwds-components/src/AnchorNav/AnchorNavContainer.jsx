import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';

class AnchorNavContainer extends PureComponent {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md="4" lg="3">
          {this.props.renderNav()}
        </Col>
        <Col md="8" lg="9">
          {this.props.renderMain()}
        </Col>
      </Row>
    );
  }
}

export default AnchorNavContainer;
