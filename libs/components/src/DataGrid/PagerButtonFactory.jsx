import React, { Fragment } from 'react'
import { Button } from 'reactstrap'
import Icon from '@cwds/icons'

const PagerButtonFactory = ({ rotation }) => props => {
  const { children, ...rest } = props
  return (
    <Fragment>
      <span className="sr-only">{children}</span>
      <Button {...rest} color="info" aria-label={children}>
        <Icon aria-hidden="true" icon="chevron-down" rotation={rotation} />
      </Button>
    </Fragment>
  )
}

export default PagerButtonFactory
