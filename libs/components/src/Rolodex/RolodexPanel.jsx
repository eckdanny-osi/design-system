import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Collapse } from '@cwds/reactstrap'
import Icon from '@cwds/icons'

class RolodexPanel extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    animate: PropTypes.bool,
  }
  shouldComponentUpdate(prevProps, prevState) {
    if (this.props.isOpen !== prevProps.isOpen) return true
    if (
      this.props.animate &&
      this.state.animationState !== prevState.animationState
    ) {
      return true
    }
    return false
  }
  setAnimationState = animationState => {
    if (!this.props.animate) return
    this.setState({ animationState })
  }
  render() {
    const { isOpen, animate, children } = this.props
    return (
      <Collapse
        isOpen={isOpen}
        enter={!!animate}
        exit={!!animate}
        onEntering={() => this.setAnimationState('entering')}
        onEntered={() => this.setAnimationState('entered')}
        onExiting={() => this.setAnimationState('exiting')}
        onExited={() => this.setAnimationState('exited')}
      >
        {children}
      </Collapse>
    )
  }
}

export default RolodexPanel
