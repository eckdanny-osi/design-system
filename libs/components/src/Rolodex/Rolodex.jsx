import React, { Component } from 'react'
import cn from 'classnames'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  CardTitle,
} from '@cwds/reactstrap'
import Icon from '@cwds/icons'

const RolodexToggle = ({ isOpen, onClick }) => {
  return (
    <Button
      className="rolodex__toggle"
      onClick={onClick}
      style={{
        display: 'block',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 99,
      }}
    >
      <Icon name="chevron-down" rotation={isOpen ? undefined : 180} />
    </Button>
  )
}

class Rolodex extends Component {
  state = {
    cards: [{ isOpen: false }, { isOpen: false }, { isOpen: false }],
  }
  constructor(props) {
    super(props)

    this.renderPanel = this.renderPanel.bind(this)
    this.toggleCard = this.toggleCard.bind(this)
  }
  componentWillUpdate() {
    // Something...
  }
  toggleCard(i) {
    this.setState({
      cards: this.state.cards.map((cardState, j) =>
        i === j ? { ...cardState, isOpen: !cardState.isOpen } : cardState
      ),
    })
  }
  renderPanel(node, index, array) {
    if (node.type !== Card) return null
    const [Header, Body, Footer] = React.Children.toArray(node.props.children)
    const { isOpen } = this.state.cards[index]
    return (
      <Card className="mb-0" key={index}>
        <Header.type
          {...Header.props}
          className={cn(Header.props.className, {
            'border-bottom-0': !isOpen,
          })}
        >
          {Header.props.children}
          <RolodexToggle
            onClick={e => this.toggleCard(index)}
            isOpen={isOpen}
          />
        </Header.type>
        <Collapse isOpen={isOpen}>
          {React.cloneElement(Body, {})}
          {Footer && React.cloneElement(Footer, {})}
        </Collapse>
      </Card>
    )
  }

  render() {
    return React.Children.toArray(this.props.children)
      .filter(({ type }) => type === Card)
      .map(this.renderPanel)
  }
}

export default Rolodex
