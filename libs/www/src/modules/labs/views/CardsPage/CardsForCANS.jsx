import React from 'react';
import { Card, Row, Col } from '@cwds/components';

const CardsForCANS = () => {
  return (
    <div>
      <h3>CANS proposal</h3>
      <p>What about an implementation like this for CANS?</p>
      <Card>
        <Card.Header>Add CANS</Card.Header>
        <Card.Body>
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
          {/* <Card.SectionGroup>
            <Card.Section title="Child Behavioral/Emotional Needs" collapsible>
              <Card.SubsectionGroup>
                <Card.Subsection
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
                </Card.Subsection>
                <Card.Subsection title="Impulsivity/Hyperactivity" collapsible>
                  <div>Bar Body</div>
                </Card.Subsection>
                <Card.Subsection title="Depression" collapsible>
                  My Item 1.3
                </Card.Subsection>
                <Card.Subsection title="Anxiety" collapsible>
                  My Item 1.4
                </Card.Subsection>
              </Card.SubsectionGroup>
            </Card.Section>
            <Card.Section title="Life Domain Functioning" collapsible>
              <Card.SubsectionGroup>
                <Card.Subsection title="Foo" collapsible>
                  <div>Foo Body</div>
                </Card.Subsection>
                <Card.Subsection title="Bar" collapsible>
                  <div>Bar Body</div>
                </Card.Subsection>
                <Card.Subsection title="1.3" collapsible>
                  My Item 1.3
                </Card.Subsection>
                <Card.Subsection title="1.4" collapsible>
                  My Item 1.4
                </Card.Subsection>
              </Card.SubsectionGroup>
            </Card.Section>
            <Card.Section title="Risk Behaviors" collapsible>
              <Card.SubsectionGroup>
                <Card.Subsection title="Foo" collapsible>
                  <div>Foo Body</div>
                </Card.Subsection>
                <Card.Subsection title="Bar" collapsible>
                  <div>Bar Body</div>
                </Card.Subsection>
                <Card.Subsection title="1.3" collapsible>
                  My Item 1.3
                </Card.Subsection>
                <Card.Subsection title="1.4" collapsible>
                  My Item 1.4
                </Card.Subsection>
              </Card.SubsectionGroup>
            </Card.Section>
          </Card.SectionGroup> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsForCANS;
