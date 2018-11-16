import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { CardHeader } from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import Styles from './Rolodex.module.scss'

class RolodexHeader extends Component {
  static propTypes = {
    'aria-level': PropTypes.number,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    id: PropTypes.string,
    panelId: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.any.isRequired,
  }
  static defaultProps = {
    'aria-level': 3,
  }
  el = React.createRef()
  focus() {
    this.el.current.querySelector('[role="button"]').focus()
  }
  render() {
    const {
      className,
      isOpen,
      headerId,
      panelId,
      'aria-level': ariaLevel,
      disabled: ariaDisabled,
      children,
      ...otherProps
    } = this.props
    return (
      <div role="heading" aria-level={ariaLevel} ref={this.el}>
        <CardHeader
          {...otherProps}
          className={cn(
            className,
            Styles.RolodexCardHeader,
            {
              'border-bottom-0': !isOpen,
              // 'bg-light': !isOpen,
            },
            'd-flex align-items-center'
          )}
          id={headerId}
          role="button"
          aria-controls={panelId}
          aria-expanded={isOpen}
          aria-disabled={ariaDisabled}
          tabIndex="0"
        >
          <div className="mr-3 flex-grow-1">{children}</div>
          <Icon name="chevron-down" rotation={!isOpen ? undefined : 180} />
        </CardHeader>
      </div>
    )
  }
  renderold() {
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
