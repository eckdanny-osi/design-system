import React, { Component } from 'react'
import cn from 'classnames'
import uniqueId from 'lodash.uniqueid'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  CardTitle,
  Util,
} from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import Styles from './Rolodex.module.scss'

const { keyCodes } = Util

const pushRight = '60px'

const RolodexToggle = ({ isOpen, onClick }) => {
  return (
    <div className={cn(Styles.RolodexToggle)} onClick={onClick}>
      <Icon name="chevron-down" rotation={!isOpen ? undefined : 180} />
    </div>
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
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  mkId = () => uniqueId('rolodex--')
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
  handleKeyDown(e, index) {
    if ([keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
      debugger
    }
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
    const id = this.mkId()
    return (
      <Card className="mb-0" key={index}>
        <Header.type
          {...Header.props}
          className={cn(Header.props.className, Styles.RolodexHeader, {
            'border-bottom-0': !isOpen && status !== 'exiting',
          })}
          tag="button"
          onClick={e => this.toggleCard(index)}
          aria-expanded={this.isOpen}
          aria-controls={id}
          onKeyDown={e => this.handleKeyDown(e, index)}
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
          <div id={id}>
            {React.cloneElement(Body, {})}
            {Footer && React.cloneElement(Footer, {})}
          </div>
        </Collapse>
      </Card>
    )
  }

  render() {
    const cards = React.Children.toArray(this.props.children)
      .filter(({ type }) => type === Card)
      .map(this.renderPanel)
    return <div>{cards}</div>
  }
}

export default Rolodex
