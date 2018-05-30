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

class CardSubsection extends Component {
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
      <div className={Styles.CardSubsectionTitle}>
        <a onClick={this.toggleCollapse} href="#section">
          <Icon
            className={Styles.CardSubsectionToggle}
            icon={this.state.collapsed ? 'plus' : 'minus'}
            style={{
              color: this.state.collapsed ? 'inherit' : '#CCC',
              marginRight: '5px',
            }}
          />
          {title}
        </a>
      </div>
    );
  }
  renderSectionBody() {
    if (!this.props.collapsible) {
      return this.props.children;
    }
    return (
      <Collapse isOpen={!this.state.collapsed}>
        <div className={Styles.CardSubsectionBody}>{this.props.children}</div>
      </Collapse>
    );
  }
  render() {
    const { children, title, collapsible } = this.props;
    return (
      <div className={Styles.CardSubsection}>
        {this.renderSectionTitle()}
        {this.renderSectionBody()}
      </div>
    );
  }
}

CardSubsection.propTypes = propTypes;

export default CardSubsection;
