import React from 'react'
import { Icon } from '@cwds/components'
import cn from 'classnames'
import Styles from './IconSquare.module.scss'

const IconSquare = props => {
  return (
    <div className={cn('p-2', 'm-1', Styles.IconSquare)}>
      <div>
        <Icon size="2x" {...props} />
      </div>
      <small className={cn('mt-1', Styles.name)}>
        {Array.isArray(props.name) && (
          <tt>
            {props.name[1]}
            {props.name[0] !== 'fas' && <span> ({props.name[0]})</span>}
          </tt>
        )}
        {typeof props.name === 'string' && <tt>{props.name}</tt>}
      </small>
    </div>
  )
}

export default IconSquare
