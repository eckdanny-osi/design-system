import React, { Component } from 'react';
import { compose, withStateHandlers } from 'recompose';
import Alert from './Alert';

export default compose(
  withStateHandlers(
    { isOpen: true },
    { toggle: ({ isOpen }) => value => ({ isOpen: !value }) }
  )
)(Alert);
