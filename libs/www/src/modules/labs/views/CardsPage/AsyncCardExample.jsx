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
          <CardHeader>
            <CardTitle>Async Card</CardTitle>
          </CardHeader>
          <CardBody>Checkout the resolved state!</CardBody>
          <CardFooter>
            <Button color="primary">OK</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

export default AsyncCardExample
