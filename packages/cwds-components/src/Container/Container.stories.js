import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Container from './';
import Row from '../Row';
import Col from '../Col';
const boxStyle = {
  backgroundColor: '#E5EDF5',
  border: '1px solid #C9C1D5',
  color: '#5F5F5F',
  paddingBottom: '.75rem',
  paddingTop: '.75rem',
};

storiesOf('Containers', module)
  .addDecorator(withKnobs)
  .add(
    'Container',
    withInfo()(() => (
      <Container>
        <Row style={{ marginBottom: '1rem' }}>
          <Col style={boxStyle}>.col</Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col style={boxStyle}>.col</Col>
          <Col style={boxStyle}>.col</Col>
          <Col style={boxStyle}>.col</Col>
          <Col style={boxStyle}>.col</Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col xs="3" style={boxStyle}>
            .col-3
          </Col>
          <Col xs="auto" style={boxStyle}>
            .col-auto - variable width content
          </Col>
          <Col xs="3" style={boxStyle}>
            .col-3
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col xs="6" style={boxStyle}>
            .col-6
          </Col>
          <Col xs="6" style={boxStyle}>
            .col-6
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col xs="6" sm="4" style={boxStyle}>
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4" style={boxStyle}>
            .col-6 .col-sm-4
          </Col>
          <Col sm="4" style={boxStyle}>
            .col-sm-4
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col sm={{ size: 6, order: 2, offset: 1 }} style={boxStyle}>
            .col-sm-6 .col-sm-order-2 .col-sm-offset-2
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col sm="12" md={{ size: 8, offset: 2 }} style={boxStyle}>
            .col-sm-12 .col-md-6 .col-md-offset-3
          </Col>
        </Row>
        <Row style={{ marginBottom: '1rem' }}>
          <Col sm={{ size: 'auto', offset: 1 }} style={boxStyle}>
            .col-sm .col-sm-offset-1
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }} style={boxStyle}>
            .col-sm .col-sm-offset-1
          </Col>
        </Row>
      </Container>
    ))
  );
