function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../Button';
import Card from './Card';

class MultiContextCard extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "toggleScope", () => {
      const newScope = 'read' === this.state.scope ? 'edit' : 'read';
      this.setState({
        scope: newScope
      });
    });

    _defineProperty(this, "renderHeader", ({
      scope
    }) => {
      return this.props.renderHeader ? this.props.renderHeader(this.props) : React.createElement(Card.Header, {
        className: "d-flex p-0 flex-row justify-content-between align-items-center"
      }, React.createElement(Card.Title, {
        className: "p-3"
      }, this.props.title), scope == 'read' && React.createElement(Button, {
        className: "m-2",
        onClick: this.toggleScope
      }, "Edit"));
    });

    this.state = {
      scope: this.props.scope
    };
  }

  render() {
    const props = _objectSpread({}, this.props, {
      scope: this.state.scope,
      renderHeader: this.renderHeader,
      toggleScope: this.toggleScope
    });

    switch (this.state.scope) {
      case 'edit':
        return this.props.edit(props);

      default:
        return this.props.read(props);
    } // return (
    //   <Card>
    //     {this.renderHeader()}
    //     {this.renderBody()}
    //     {/* {'read' === this.state.scope
    //       ? this._read({ toggleScope: this.toggleScope })
    //       : this._edit({ toggleScope: this.toggleScope })} */}
    //     {this.renderFooter()}
    //   </Card>
    // );

  }

}

_defineProperty(MultiContextCard, "propTypes", {
  scope: PropTypes.string
});

_defineProperty(MultiContextCard, "defaultProps", {
  scope: 'read'
});

export default MultiContextCard;