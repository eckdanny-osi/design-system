import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnchorSection extends Component {
  // ref = React.createRef();
  static propTypes = {
    id: PropTypes.string.isRequired,
    //   registerRef: PropTypes.func,
  };
  componentDidMount() {
    // this.props.registerRef(this.ref.current);
  }
  componentWillUnmount() {
    // console.debug('section unmounted');
  }
  render() {
    return <div id={this.props.id}>{this.props.children}</div>;
  }
}

export default AnchorSection;
