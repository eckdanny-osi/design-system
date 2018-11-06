import React, { Fragment } from 'react'
import { Button } from '@cwds/reactstrap'
import DS from '@cwds/core'
import Icon from '@cwds/icons'

const PagerButtonFactory = ({ rotation }) => props => {
  const { children, ...rest } = props
  return (
    <Fragment>
      <span className="sr-only">{children}</span>
      <Button {...rest} color="info" aria-label={children}>
        <Icon
          aria-hidden="true"
          icon="chevron-down"
          rotation={rotation}
          color={DS.colors.white}
        />
      </Button>
    </Fragment>
  )
}

export default PagerButtonFactory
