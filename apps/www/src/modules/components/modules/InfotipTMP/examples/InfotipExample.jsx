import React, { Component } from 'react'
import { Infotip, PopoverBody } from '@cwds/components'

export default class Example extends Component {
  static defaultProps = {
    delay: 350,
  }
  state = {
    hasFocus: false,
    hasHover: false,
  }
  _timeout = null
  get isOpen() {
    return this.state.hasFocus || this.state.hasHover
  }
  handleMouseEnter = () => {
    if (!this.isOpen) {
      this._timeout = setTimeout(
        () => this.setState({ hasHover: true }),
        this.props.delay
      )
    }
  }
  handleMouseLeave = () => {
    clearTimeout(this._timeout)
    this.setState({ hasHover: false })
  }
  handleFocus = () => {
    if (!this.isOpen) {
      this._timeout = setTimeout(
        () => this.setState({ hasFocus: true }),
        this.props.delay
      )
    }
  }
  handleBlur = () => {
    clearTimeout(this._timeout)
    this.setState({ hasFocus: false })
  }
  render() {
    return (
      <Infotip
        id="my-infotip-example"
        isOpen={this.isOpen}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <PopoverBody>
          <p>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </p>
          <p>
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </p>
          <p className="mb-0">
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </p>
        </PopoverBody>
      </Infotip>
    )
  }
}
