import React from 'react';
import PropTypes from 'prop-types';
import foo from './App.scss';
import AppBar from '@cwds/components/lib/AppBar';
import PageHeader from '@cwds/components/lib/PageHeader';
import Alert from '@cwds/components/lib/Alert';
import Button from '@cwds/components/lib/Button';
import Icon from '@cwds/components/lib/Icon';
import Container from '@cwds/components/lib/Container';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import { Card, CardBody } from '@cwds/components/lib/Cards';

const propTypes = {};
const defaultProps = {};

const App = ({ name }) => (
  <div>
    <AppBar />
    <PageHeader>alskdfjalsdkfj</PageHeader>
    <Container>
      <h1>alskdjfasdkf</h1>
      <Alert color="primary">alskdfj</Alert>
      <Button primary>Hello!</Button> <Button>Default Button</Button>{' '}
      <Button warning>Be Careful</Button>
      <p>asdf</p>
      <Button primary disabled>
        <Icon icon="circleNotch" transform={{ rotate: 42 }} spin /> Save
      </Button>{' '}
      <Button primary>
        <Icon icon="check" /> Save
      </Button>
      <Card>
        <CardBody>Hello World</CardBody>
      </Card>
      <div
        style={{
          border: '3px solid #EEEEEE',
          backgroundColor: 'white',
          padding: '10px',
          textAlign: 'right',
        }}
      >
        <Button>Cancel</Button> <Button primary>Save</Button>
      </div>
    </Container>
  </div>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
