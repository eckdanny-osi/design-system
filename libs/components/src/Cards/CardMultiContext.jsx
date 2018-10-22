import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button } from '../Buttons'
import Card from './Card'

class MultiContextCard extends Component {
  static propTypes = {
    scope: PropTypes.string,
  }
  static defaultProps = {
    scope: 'read',
  }
  constructor(props) {
    super(props)
    this.state = {
      scope: this.props.scope,
    }
  }
  toggleScope = () => {
    const newScope = 'read' === this.state.scope ? 'edit' : 'read'
    this.setState({ scope: newScope })
  }
  renderHeader = ({ scope }) => {
    return this.props.renderHeader ? (
      this.props.renderHeader(this.props)
    ) : (
      <Card.Header className="d-flex p-0 flex-row justify-content-between align-items-center">
        <Card.Title className="p-3">{this.props.title}</Card.Title>
        {scope == 'read' && (
          <Button className="m-2" onClick={this.toggleScope}>
            Edit
          </Button>
        )}
      </Card.Header>
    )
  }
  render() {
    const props = {
      ...this.props,
      scope: this.state.scope,
      renderHeader: this.renderHeader,
      toggleScope: this.toggleScope,
    }
    switch (this.state.scope) {
      case 'edit':
        return this.props.edit(props)
      default:
        return this.props.read(props)
    }
    // return (
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

export default MultiContextCard
