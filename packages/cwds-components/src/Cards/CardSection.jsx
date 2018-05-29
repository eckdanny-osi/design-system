import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible, { Collapse } from '../Collapse';
import CardSubtitle from './CardSubtitle';
import Subtitle from './CardSubtitle';
import Styles from './Cards.module.scss';

const propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  collapsible: PropTypes.bool,
};

class CardSection extends Component {
  state = {};
  constructor(props) {
    super(props);
    if (props.collapsible) {
      this.state.collapsed = true;
    }
  }
  renderSectionTitle() {
    const { title } = this.props;
    return <div className={Styles.CardSectionTitle}>{title}</div>;
  }
  renderSectionBody() {
    if (!this.props.collapsible) {
      return this.props.children;
    }
    return (
      <Collapse isOpen={!this.state.collapsed}>{this.props.children}</Collapse>
    );
  }
  render() {
    const { children, title, collapsible } = this.props;
    return (
      <div className={Styles.CardSection}>
        {this.renderSectionTitle()}
        {this.renderSectionBody()}
      </div>
    );
  }
}

CardSection.propTypes = propTypes;

export default CardSection;
