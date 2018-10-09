import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// import { TooltipUncontrolled } from '../Tooltip';
import TooltipUncontrolled from 'reactstrap/lib/UncontrolledTooltip';
import { default as Icon } from '../Icon';
import styles from './InfoTip.module.scss';
import uuid from 'lodash.uniqueid';

class InfoTip extends PureComponent {
  static propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  constructor(props) {
    super(props);
    this.renderText = this.renderText.bind(this);
  }

  renderText() {
    if ('function' === typeof this.props.text) {
      return this.props.text();
    }
    return this.props.text;
  }

  render() {
    const id = uuid();
    return (
      <div className={cn(styles.InfoTipContainer)}>
        <Icon icon="infoCircle" color="primary" size="xs" id={id} />
        <TooltipUncontrolled placement="top" target={id}>
          {this.renderText()}
        </TooltipUncontrolled>
      </div>
    );
  }
}

export default InfoTip;
