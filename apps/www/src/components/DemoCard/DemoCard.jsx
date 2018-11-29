import React from 'react'
import cn from 'classnames'
import Styles from './DemoCard.module.scss'

const DemoCard = props => {
  if (React.Children.only(props.children)) {
    const { children: child } = props
    return (
      <div className={cn(Styles.DemoCard, props.className)}>
        <div style={{ position: 'relative' }}>
          {React.cloneElement(child, {
            className: cn(child.props.className, 'mb-0'),
          })}
        </div>
      </div>
    )
  }
  return (
    <div className={cn(Styles.DemoCard, props.className)}>
      <div style={{ position: 'relative' }}>
        {React.cloneElement(props.children, {
          className: cn(props.className, 'mb-0'),
        })}
      </div>
    </div>
  )
}

DemoCard.defaultProps = {
  className: 'p-3 mb-4',
}

export default DemoCard
