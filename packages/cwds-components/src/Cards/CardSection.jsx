import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible, { Collapse } from '../Collapse';
import Icon from '../Icon';
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
  toggleCollapse = e => {
    e.preventDefault();
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  renderSectionTitle() {
    const { title } = this.props;
    return (
      <div className={Styles.CardSectionTitle}>
        <a onClick={this.toggleCollapse} href="#section">
          {title}
          <Icon
            icon="chevronDown"
            style={{
              float: 'right',
              marginRight: '9px',
              marginTop: '4px',
              color: this.state.collapsed ? 'inherit' : '#CCC',
            }}
            rotation={this.state.collapsed ? null : 180}
          />
        </a>
      </div>
    );
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
