import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { UncontrolledTooltip } from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import styles from './InfoTip.module.scss'
import uuid from 'lodash.uniqueid'

class InfoTip extends PureComponent {
  static propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  constructor(props) {
    super(props)
    this.renderText = this.renderText.bind(this)
  }

  renderText() {
    if ('function' === typeof this.props.text) {
      return this.props.text()
    }
    return this.props.text
  }

  render() {
    const id = uuid()
    return (
      <div className={cn(styles.InfoTipContainer)}>
        <Icon icon="infoCircle" color="primary" size="xs" id={id} />
        <UncontrolledTooltip placement="top" target={id}>
          {this.renderText()}
        </UncontrolledTooltip>
      </div>
    )
  }
}

export default InfoTip
