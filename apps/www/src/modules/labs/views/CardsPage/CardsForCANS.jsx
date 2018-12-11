import React from 'react'
import { Card, CardHeader, CardBody, Row, Col } from '@cwds/components'

const CardsForCANS = () => {
  return (
    <div>
      <h3>CANS proposal</h3>
      <p>What about an implementation like this for CANS?</p>
      <Card>
        <CardHeader>Add CANS</CardHeader>
        <CardBody>
          <Row>
            <Col sm="5">
              <label>
                alskdjf
                <br />
                <input type="text" />
              </label>
            </Col>
            <Col sm="5">
              <label>
                alskdjf
                <br />
                <input type="text" />
              </label>
            </Col>
            <Col sm="2">
              <br />
              <button>on</button>
              <button>off</button>
            </Col>
          </Row>
          {/* <CardSectionGroup>
            <CardSection title="Child Behavioral/Emotional Needs" collapsible>
              <CardSubsectionGroup>
                <CardSubsection
                  renderTitle={() => (
                    <div>
                      Psychosis (Thought Disorder)
                      <select
                        style={{ float: 'right' }}
                        onClick={e => e.stopPropagation()}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  )}
                  collapsible
                  initialOpen
                >
                  <div>Foo Body</div>
                </CardSubsection>
                <CardSubsection title="Impulsivity/Hyperactivity" collapsible>
                  <div>Bar Body</div>
                </CardSubsection>
                <CardSubsection title="Depression" collapsible>
                  My Item 1.3
                </CardSubsection>
                <CardSubsection title="Anxiety" collapsible>
                  My Item 1.4
                </CardSubsection>
              </CardSubsectionGroup>
            </CardSection>
            <CardSection title="Life Domain Functioning" collapsible>
              <CardSubsectionGroup>
                <CardSubsection title="Foo" collapsible>
                  <div>Foo Body</div>
                </CardSubsection>
                <CardSubsection title="Bar" collapsible>
                  <div>Bar Body</div>
                </CardSubsection>
                <CardSubsection title="1.3" collapsible>
                  My Item 1.3
                </CardSubsection>
                <CardSubsection title="1.4" collapsible>
                  My Item 1.4
                </CardSubsection>
              </CardSubsectionGroup>
            </CardSection>
            <CardSection title="Risk Behaviors" collapsible>
              <CardSubsectionGroup>
                <CardSubsection title="Foo" collapsible>
                  <div>Foo Body</div>
                </CardSubsection>
                <CardSubsection title="Bar" collapsible>
                  <div>Bar Body</div>
                </CardSubsection>
                <CardSubsection title="1.3" collapsible>
                  My Item 1.3
                </CardSubsection>
                <CardSubsection title="1.4" collapsible>
                  My Item 1.4
                </CardSubsection>
              </CardSubsectionGroup>
            </CardSection>
          </CardSectionGroup> */}
        </CardBody>
      </Card>
    </div>
  )
}

export default CardsForCANS
