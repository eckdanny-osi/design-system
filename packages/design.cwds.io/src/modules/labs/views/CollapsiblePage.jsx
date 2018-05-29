import React, { Component } from 'react';
import Button from '@cwds/components/lib/Button';
import { Card, CardBody } from '@cwds/components/lib/Cards';
import Collapse from '@cwds/components/lib/Collapse';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          Toggle
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

const CollapsiblePage = () => {
  return (
    <div>
      <Example />
    </div>
  );
};

export default {
  name: 'Collapsible',
  component: CollapsiblePage,
};
