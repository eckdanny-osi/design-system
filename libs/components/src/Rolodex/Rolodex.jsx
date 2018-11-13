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

const pushRight = '60px'

const RolodexToggle = ({ isOpen, onClick }) => {
  return (
    <Button
      className="rolodex__toggle"
      onClick={onClick}
      style={{
        display: 'block',
        position: 'absolute',
        right: '5px',
        top: '10px',
        zIndex: 99,
      }}
    >
      <Icon name="chevron-down" rotation={!isOpen ? undefined : 180} />
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
  setCardCollapseState(i, status) {
    this.setState({
      cards: this.state.cards.map((cardState, j) =>
        i === j ? { ...cardState, status } : cardState
      ),
    })
  }
  renderPanel(node, index, array) {
    if (node.type !== Card) return null
    const [Header, Body, Footer] = React.Children.toArray(node.props.children)
    const { isOpen, status } = this.state.cards[index]
    return (
      <Card className="mb-0" key={index}>
        <Header.type
          {...Header.props}
          className={cn(Header.props.className, {
            'border-bottom-0': !isOpen && status !== 'exiting',
          })}
          style={{
            paddingRight: pushRight,
          }}
        >
          {Header.props.children}
          <RolodexToggle
            onClick={e => this.toggleCard(index)}
            isOpen={isOpen}
          />
        </Header.type>
        <Collapse
          isOpen={isOpen}
          onEntering={() => this.setCardCollapseState(index, 'entering')}
          onEntered={() => this.setCardCollapseState(index, 'entered')}
          onExiting={() => this.setCardCollapseState(index, 'exiting')}
          onExited={() => this.setCardCollapseState(index, 'exited')}
        >
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
