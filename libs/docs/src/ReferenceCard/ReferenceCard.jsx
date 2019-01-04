import React from 'react'
import cn from 'classnames'
import { Card, CardBody, Icon } from '@cwds/components'
import Styles from './ReferenceCard.module.scss'

export default ({ children, name = 'info-circle' }) => (
  <Card className="my-3 bg-breath border-0 rounded-0">
    <CardBody className="d-flex align-items-start">
      <Icon name={name} size="2x" color="info" className="mr-3" />
      <div
        className={cn('flex-grow-1 my-0 font-italic text-info', Styles.Body)}
      >
        {children}
      </div>
    </CardBody>
  </Card>
)
