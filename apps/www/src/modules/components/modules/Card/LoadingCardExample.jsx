import React, { Component } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Placeholder,
  Button,
} from '@cwds/components'
import DemoCard from '../../../../components/DemoCard'

class Example extends Component {
  state = {
    isLoading: true,
  }
  toggleIsLoading = () => this.setState({ isLoading: !this.state.isLoading })
  render() {
    return (
      <DemoCard>
        <div>
          <div className="text-right mb-2">
            <Button color="accent" size="sm" onClick={this.toggleIsLoading}>
              Toggle
            </Button>
          </div>
          <Card>
            <CardHeader>
              {this.state.isLoading ? (
                <Placeholder>Uknown Person</Placeholder>
              ) : (
                <CardTitle>Fred Jones</CardTitle>
              )}
            </CardHeader>
            <CardBody>
              {this.state.isLoading ? (
                <Placeholder cols={2} rows={3} />
              ) : (
                <ul>
                  <li>Scooby-Doo</li>
                  <li>Shaggy</li>
                  <li>Daphne</li>
                  <li>Velma</li>
                </ul>
              )}
            </CardBody>
          </Card>
        </div>
      </DemoCard>
    )
  }
}

export default Example
