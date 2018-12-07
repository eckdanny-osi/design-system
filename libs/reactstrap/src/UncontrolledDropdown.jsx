import React, { Component } from 'react'
import Dropdown from './Dropdown'

export default class UncontrolledDropdown extends Component {
  state = { isOpen: false }
  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    return (
      <Dropdown
        isOpen={this.state.isOpen}
        toggle={this.toggle}
        {...this.props}
      />
    )
  }
}
