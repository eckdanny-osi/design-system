import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@cwds/components';

const propTypes = {};
const defaultProps = {};

const App = ({ name }) => (
  <div>
    <Button>Hello!</Button>
  </div>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
