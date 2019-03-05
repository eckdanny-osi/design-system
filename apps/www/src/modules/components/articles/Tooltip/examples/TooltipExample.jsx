import React, { Component } from 'react'
import { Tooltip } from '@cwds/components'

export default class Example extends Component {
  state = { isOpen: false }
  toggle = () => this.setState({ isOpen: !this.state.isOpen })
  render() {
    return (
      <div className="bg-white p-3 pt-5">
        <div>
          Somewhere in here is a{' '}
          <span
            style={{ textDecoration: 'underline', color: 'blue' }}
            href="#"
            id="TooltipExample"
          >
            tooltip
          </span>
          .
        </div>
        <Tooltip
          placement="top"
          isOpen={this.state.isOpen}
          target="TooltipExample"
          toggle={this.toggle}
        >
          Hello world!
        </Tooltip>
      </div>
    )
  }
}
