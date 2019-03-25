import React, { Component } from 'react'
import {
  Button,
  ButtonGroup,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  IconButton,
  Row,
  Placeholder,
} from '@cwds/components'

class Toggles extends Component {
  state = {
    selected: 1,
    iSelected: 1,
  }
  onBtnClick(selected) {
    this.setState({ selected })
  }
  onIBtnClick = iSelected => {
    this.setState({ iSelected })
  }
  render() {
    const { iSelected, selected } = this.state
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>
              <Row>
                <Col className="align-middle">
                  <CardTitle>Toggle with Texts</CardTitle>
                </Col>
                <Col className="text-right">
                  <ButtonGroup
                    className="my-2"
                    role="group"
                    aria-label="First group"
                  >
                    <Button
                      className="px-3 py-1"
                      active={selected === 1}
                      aria-label="1"
                      aria-pressed={selected === 1}
                      onClick={() => this.onBtnClick(1)}
                      outline
                    >
                      1
                    </Button>
                    <Button
                      className="px-3 py-1"
                      active={selected === 2}
                      aria-label="2"
                      aria-pressed={selected === 2}
                      onClick={() => this.onBtnClick(2)}
                      outline
                    >
                      2
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Placeholder grid cols={2} rows={8} md={6} />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              <Row>
                <Col>
                  Toggle with Icons
                  <CardTitle />
                </Col>
                <Col className="text-right">
                  <ButtonGroup
                    className="my-2"
                    role="group"
                    aria-label="First group"
                  >
                    <IconButton
                      icon="search"
                      aria-label="search-icon-1"
                      aria-pressed={iSelected === 1}
                      active={iSelected === 1}
                      color="secondary"
                      onClick={() => this.onIBtnClick(1)}
                      outline
                    />
                    <IconButton
                      icon="search"
                      aria-label="search-icon-2"
                      aria-pressed={iSelected === 1}
                      active={iSelected === 2}
                      color="secondary"
                      onClick={() => this.onIBtnClick(2)}
                      outline
                    />
                  </ButtonGroup>
                </Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Placeholder grid rows={8} />
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Toggles
