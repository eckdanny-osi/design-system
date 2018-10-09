function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnchorSection extends Component {
  // ref = React.createRef();
  componentDidMount() {// this.props.registerRef(this.ref.current);
  }

  componentWillUnmount() {// console.debug('section unmounted');
  }

  render() {
    return React.createElement("div", {
      id: this.props.id
    }, this.props.children);
  }

}

_defineProperty(AnchorSection, "propTypes", {
  id: PropTypes.string.isRequired //   registerRef: PropTypes.func,

});

export default AnchorSection;