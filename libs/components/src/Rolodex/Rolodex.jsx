import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import uniqueId from 'lodash.uniqueid'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapse,
  CardTitle,
  Util,
} from '@cwds/reactstrap'
import Icon from '@cwds/icons'
import Styles from './Rolodex.module.scss'

const { keyCodes } = Util

class Rolodex extends Component {
  static propTypes = {
    exclusive: PropTypes.bool,
    collapsible: PropTypes.bool,
    aggregateControl: PropTypes.bool,
  }
  state = {
    cards: [],
  }
  ALLOWED_CHILD_TYPES = [Card]
  ALLOWED_GRANDCHILD_TYPES = [CardHeader, CardBody, CardFooter]
  constructor(props) {
    super(props)

    const { sections } = this.parseChildren()
    this.state = {
      cards: sections,
    }

    this.renderPanel = this.renderPanel.bind(this)
    this.toggleCard = this.toggleCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  rolodexId = uniqueId('rolodex-')
  mkId = prefix => uniqueId(`${this.rolodexId}__${prefix}-`)
  parseChildren() {
    let sections = []
    try {
      React.Children.forEach(this.props.children, child => {
        let section = {}
        if (this.ALLOWED_CHILD_TYPES.indexOf(child.type) === -1) {
          throw new Error('Invalid Child Type!')
        }
        section.id = child.props.id || this.mkId('region')
        section.isOpen = child.props.isOpen
        React.Children.forEach(child.props.children, grandchild => {
          if (this.ALLOWED_GRANDCHILD_TYPES.indexOf(grandchild.type) === -1) {
            throw new Error('Invalid Child Composition')
          }
        })
        sections.push(section)
      })
    } catch (err) {
      // TODO: handle err
    }
    return {
      sections,
    }
  }
  componentWillUpdate() {
    console.log('will update')
  }
  componentDidMount() {
    console.log('did mount')
    this.handleProps()
  }
  componentWillReceiveProps() {
    console.log('will receive props')
  }
  shouldComponentUpdate() {
    console.log('should update')
    return true
  }
  handleProps() {
    const sections = []
    try {
      React.Children.forEach(this.props.children, child => {
        if (this.ALLOWED_CHILD_TYPES.indexOf(child.type) === -1) {
          throw new Error('Invalid Child Type!')
        }
        sections.push({})
        React.Children.forEach(child.props.children, grandchild => {
          if (this.ALLOWED_GRANDCHILD_TYPES.indexOf(grandchild.type) === -1) {
            throw new Error('Invalid Child Composition')
          }
        })
      })
    } catch (err) {
      // TODO: handle err
    }
    console.log('all good', sections)
  }
  toggleCard(i) {
    const { exclusive, collapsible } = this.props
    if (exclusive) {
      this.setState({
        cards: this.state.cards.map((card, j) =>
          i === j
            ? { ...card, isOpen: !card.isOpen }
            : { ...card, isOpen: false }
        ),
      })
    } else {
      this.setState({
        cards: cards.map((cardState, j) =>
          i === j ? { ...cardState, isOpen: !cardState.isOpen } : cardState
        ),
      })
    }
  }
  handleKeyDown(e, index) {
    const { cards } = this.state
    if ([keyCodes.up, keyCodes.down].indexOf(e.which) !== -1) {
      let newIndex
      if (e.which === keyCodes.up) {
        newIndex = index <= 0 ? cards.length - 1 : index - 1
      } else if (e.which == keyCodes.down) {
        newIndex = index >= cards.length - 1 ? 0 : index + 1
      }
      const nextId = this.state.cards[newIndex].id
      document.querySelector(`button[aria-controls="${nextId}"]`).focus()
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
    const [Header, ...restChildren] = React.Children.toArray(
      node.props.children
    )
    const { isOpen, status, id } = this.state.cards[index]
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
          <div role="header" ref={el => (this.headerRef = el)}>
            {Header.props.children}
            <div className={cn(Styles.RolodexToggle)}>
              <Icon name="chevron-down" rotation={!isOpen ? undefined : 180} />
            </div>
          </div>
        </Header.type>
        <Collapse
          isOpen={isOpen}
          onEntering={() => this.setCardCollapseState(index, 'entering')}
          onEntered={() => this.setCardCollapseState(index, 'entered')}
          onExiting={() => this.setCardCollapseState(index, 'exiting')}
          onExited={() => this.setCardCollapseState(index, 'exited')}
        >
          <div id={id} ref={el => (this.panelRef = el)}>
            {restChildren}
          </div>
        </Collapse>
      </Card>
    )
  }

  render() {
    // console.log('render')
    // console.log({ headerRef: this.headerRef, panelRef: this.panelRef })
    const cards = React.Children.toArray(this.props.children)
      .filter(({ type }) => type === Card)
      .map(this.renderPanel)
    return (
      <div>
        {this.props.aggregateControls && (
          <div className="text-right mb-2">
            <Button size="sm" color="primary">
              Expand
            </Button>{' '}
            <Button size="sm" color="primary">
              Collapse
            </Button>
          </div>
        )}
        {cards}
      </div>
    )
  }
}

export default Rolodex
