import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Collapsible, { Collapse } from '../Collapse';
import Icon from '../Icon';
import CardSubtitle from './CardSubtitle';
import Subtitle from './CardSubtitle';
import Styles from './Cards.module.scss';

class CardSubsection extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    renderTitle: PropTypes.func,
    collapsible: PropTypes.bool,
    initialOpen: PropTypes.bool,
  };
  state = {};
  constructor(props) {
    super(props);
    if (props.collapsible) {
      this.state.collapsed = !this.props.initialOpen;
    }
    if (props.renderTitle) {
      this._renderTitle = props.renderTitle;
    }
  }
  renderTitle() {
    return (this._renderTitle && this._renderTitle()) || this.props.title;
  }
  toggleCollapse = e => {
    e.preventDefault();
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  renderSectionTitle() {
    const { title, renderTitle } = this.props;
    return (
      <div
        className={cn(Styles.CardSubsectionTitle, {
          [Styles.CardSubsectionTitleActive]: !this.state.collapsed,
        })}
      >
        <a
          onClick={this.toggleCollapse}
          href="javascript:void(0)"
          aria-expanded={!this.state.collapsed}
        >
          <Icon
            className={Styles.CardSubsectionToggle}
            icon={this.state.collapsed ? 'plus' : 'minus'}
          />
          <div className={Styles.CardSubsectionTitleContent}>
            {this.renderTitle()}
          </div>
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

export default CardSubsection;
