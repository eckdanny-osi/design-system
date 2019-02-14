import React from 'react'
import { Card, CardBody, Button } from '@cwds/components'

export default () => (
  <Card>
    <CardBody>
      <Button>Default</Button> <hr />
      <Button color="primary">Primary</Button>{' '}
      <Button color="secondary">Secondary</Button>{' '}
      <Button color="accent">Accent</Button>{' '}
      <Button color="breath">Breath</Button> <hr />
      <Button color="info">Info</Button>{' '}
      <Button color="success">Success</Button>{' '}
      <Button color="warning">Warning</Button>{' '}
      <Button color="danger">Danger</Button> <hr />
      <Button color="light">
        light
      </Button> <Button color="dark">dark</Button>{' '}
    </CardBody>
  </Card>
)
