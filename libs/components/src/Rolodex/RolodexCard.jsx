import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import uniqueId from 'lodash.uniqueid'
import { Card } from '@cwds/reactstrap'
import RolodexHeader from './RolodexHeader'
import RolodexPanel from './RolodexPanel'
import Styles from './Rolodex.module.scss'

class RolodexCard extends Component {
  static propTypes = {
    headerId: PropTypes.string,
    panelId: PropTypes.string,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    idPrefix: PropTypes.string,
  }
  render() {
    const [Header, ...restChildren] = React.Children.toArray(
      this.props.children
    )
    return (
      <Card className="mb-0">
        <RolodexHeader
          isOpen={this.props.isOpen}
          id={this.props.headerId}
          panelId={this.props.panelId}
          onClick={this.props.onClick}
          onKeyDown={this.props.onKeyDown}
        >
          {Header}
        </RolodexHeader>
        <RolodexPanel isOpen={this.props.isOpen} id={this.panelId}>
          {restChildren}
        </RolodexPanel>
      </Card>
    )
  }
}

export default RolodexCard
