import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TooltipUncontrolled } from '../Tooltip';
import { default as Icon } from '../Icon';
import styles from './InfoTip.module.scss';

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
    return (
      <div className={cn(styles.InfoTipContainer)}>
        <Icon
          icon="infoCircle"
          color="primary"
          size="xs"
          id="UncontrolledTooltipExample"
        />
        <TooltipUncontrolled
          placement="top"
          target="UncontrolledTooltipExample"
        >
          {this.renderText()}
        </TooltipUncontrolled>
      </div>
    );
  }
}

export default InfoTip;
