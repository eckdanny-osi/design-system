import React, { Component } from 'react';
import { compose, setDisplayName, setPropTypes, getDisplayName, withStateHandlers } from 'recompose';
import Alert from './Alert';
export default compose(setDisplayName(`${getDisplayName(Alert)}Uncontrolled`), setPropTypes(Alert.propTypes), withStateHandlers({
  isOpen: true
}, {
  toggle: ({
    isOpen
  }) => value => ({
    isOpen: !value
  })
}))(Alert);