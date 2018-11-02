import React from 'react'
import { Card } from '@cwds/components'

const CardsWithSections = () => {
  return (
    <div>
      <Card>
        <CardHeader>Add CANS</CardHeader>
        <CardBody>
          <CardSection title="Child Behavioral/Emotional Needs">
            Hello World
          </CardSection>
          <CardSection title="Child Behavioral/Emotional Needs">
            Hello World
          </CardSection>
          <CardSection title="Child Behavioral/Emotional Needs">
            Hello World
          </CardSection>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardsWithSections
