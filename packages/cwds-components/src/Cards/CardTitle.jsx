import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardTitleUnstyled from 'reactstrap/lib/CardTitle';
import Styles from './Cards.module.scss';

export { CardTitleUnstyled };

export class CardTitle extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardTitleUnstyled cssModule={Styles} {...props} />;
  }
}

export default CardTitle;
