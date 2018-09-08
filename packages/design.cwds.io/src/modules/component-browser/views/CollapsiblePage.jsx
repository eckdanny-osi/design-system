import React, { Component } from 'react';
import Button from '@cwds/components/lib/Button';
import Card from '@cwds/components/lib/Cards';
import Collapse from '@cwds/components/lib/Collapse';

export default class CollapsiblePage extends Component {
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
        <h2>Collapsibles</h2>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          Toggle
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </Collapse>
      </div>
    );
  }
}
