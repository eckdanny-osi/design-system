/* eslint-disable */
import React from 'react'
import classNames from 'classnames'
import { Util } from './utils'
import { DropdownItem as RSDropdownItem } from 'reactstrap'

const { mapToCssModules, omit } = Util

class DropdownItem extends RSDropdownItem {
  render() {
    const tabIndex = this.getTabIndex()
    const role = tabIndex > -1 ? 'menuitem' : undefined
    let {
      className,
      cssModule,
      divider,
      tag: Tag,
      header,
      active,
      ...props
    } = omit(this.props, ['toggle'])

    const classes = mapToCssModules(
      classNames(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider,
      }),
      cssModule
    )

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6'
      } else if (divider) {
        Tag = 'div'
      } else if (props.href) {
        Tag = 'a'
      }
    }

    return (
      <Tag
        type={
          Tag === 'button' && (props.onClick || this.props.toggle)
            ? 'button'
            : undefined
        }
        {...props}
        tabIndex={tabIndex}
        role={role}
        className={classes}
        onClick={this.onClick}
      />
    )
  }
}

export default DropdownItem
