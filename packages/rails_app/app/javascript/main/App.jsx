import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
// import { Button } from '@cwds/components';
import Button from '@cwds/components/lib/Button';
import { Card } from '@cwds/components';

const propTypes = {};
const defaultProps = {};

const App = ({ name }) => (
  <div>
    <h1>alskdjfasdkf</h1>
    <Button primary>Hello!</Button> <Button>Default Button</Button>{' '}
    <Button warning>Be Careful</Button>
  </div>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
