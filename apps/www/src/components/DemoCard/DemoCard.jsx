import React from 'react'
import cn from 'classnames'
import './DemoCard.css'

export default props => {
  if (React.Children.only(props.children)) {
    return (
      <div className="DemoCard p-3 mb-4">
        <div style={{ position: 'relative' }}>
          {React.cloneElement(props.children, {
            className: cn(props.children.props.className, 'mb-0'),
          })}
        </div>
      </div>
    )
  }
  return (
    <div className="DemoCard p-3 mb-4">
      <div style={{ position: 'relative' }}>
        {React.cloneElement(props.children, {
          className: cn(props.className, 'mb-0'),
        })}
      </div>
    </div>
  )
}
