import React from 'react'
import { Button, Card } from '@cwds/components'

class AsyncCardExample extends React.Component {
  state = {
    loading: true,
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }
  render() {
    return (
      <div>
        <div className="mb-3">
          <Button onClick={this.toggleLoading}>Duh</Button>
        </div>
        <Card loading={this.state.loading || undefined}>
          <Card.Header>
            <Card.Title>Async Card</Card.Title>
          </Card.Header>
          <Card.Body>Checkout the resolved state!</Card.Body>
          <Card.Footer>
            <Button color="primary">OK</Button>
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default AsyncCardExample
