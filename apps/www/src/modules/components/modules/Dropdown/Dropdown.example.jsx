import React from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from '@cwds/reactstrap'

export default class Example extends React.Component {
  state = {
    dropdownOpen: false,
  }
  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem disabled>Disabled</DropdownItem>
          <DropdownItem>Foo</DropdownItem>
          <DropdownItem>Bar</DropdownItem>
          <DropdownItem>Quo</DropdownItem>
          <DropdownItem>Qux</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
