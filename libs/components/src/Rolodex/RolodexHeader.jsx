import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { CardHeader } from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import Styles from './Rolodex.module.scss'

class RolodexHeader extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    headerId: PropTypes.string,
    panelId: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any.isRequired,
  }
  render() {
    const {
      className,
      isOpen,
      id,
      panelId,
      onClick,
      onKeyDown,
      disabled,
    } = this.props
    React.Children.only(this.props.children)
    const { type: Component, props: headerProps } = this.props.children
    if (Component !== CardHeader) throw new Error('Please use CardHeader')
    return (
      <Component
        {...headerProps}
        className={cn(className, Styles.RolodexHeader, {
          'border-bottom-0': !isOpen,
        })}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        id={id}
        aria-controls={panelId}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex={0}
      >
        <div role="header" ref={el => (this.headerRef = el)}>
          {headerProps.children}
          <div className={cn(Styles.RolodexToggle)}>
            <Icon name="chevron-down" rotation={!isOpen ? undefined : 180} />
          </div>
        </div>
      </Component>
    )
  }
}

export default RolodexHeader
