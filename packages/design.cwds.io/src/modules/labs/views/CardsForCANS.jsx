import React from 'react';
import Card from '@cwds/components/lib/Cards';
import Row from '@cwds/components/lib/Row';
import Col from '@cwds/components/lib/Col';
import Icon from '@cwds/components/lib/Icon';

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
                alskdjf<br />
                <input type="text" />
              </label>
            </Col>
            <Col sm="5">
              <label>
                alskdjf<br />
                <input type="text" />
              </label>
            </Col>
            <Col sm="2">
              <br />
              <button>on</button>
              <button>off</button>
            </Col>
          </Row>
          <Card.SectionGroup>
            <Card.Section title="Child Behavioral/Emotional Needs" collapsible>
              <Card.SubsectionGroup>
                <Card.Subsection
                  renderTitle={() => `Psychosis (Thought Disorder) ${Math.PI}`}
                  collapsible
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
          </Card.SectionGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsForCANS;
