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
  Util,
} from '@cwds/reactstrap'
import RolodexHeader from './RolodexHeader'
import RolodexCard from './RolodexCard'
import Icon from '@cwds/icons'
import Styles from './Rolodex.module.scss'

const { keyCodes } = Util

class Rolodex extends Component {
  static propTypes = {
    exclusive: PropTypes.bool,
    collapsible: PropTypes.bool,
    animate: PropTypes.bool,
    aggregateControl: PropTypes.bool,
  }
  state = {
    cards: [],
  }
  ALLOWED_CHILD_TYPES = [Card]
  ALLOWED_GRANDCHILD_TYPES = [CardHeader, CardBody, CardFooter]
  initialized = false
  constructor(props) {
    super(props)

    this.toggleCard = this.toggleCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  rolodexId = uniqueId('rolodex-')
  mkId = prefix => uniqueId(`${this.rolodexId}__${prefix}`)
  mkIds = () => {
    const cardId = this.mkId('card')
    return {
      headerId: `${cardId}__header`,
      panelId: `${cardId}__panel`,
    }
  }
  shouldComponentUpdate(prevProps, prevState) {
    // if (prevState === this.state) return false
    return true
  }
  parseChildren() {
    let cards = []
    try {
      React.Children.forEach(this.props.children, child => {
        if (this.ALLOWED_CHILD_TYPES.indexOf(child.type) === -1) {
          throw new Error('Invalid Child Type!')
        }
        React.Children.forEach(child.props.children, grandchild => {
          if (this.ALLOWED_GRANDCHILD_TYPES.indexOf(grandchild.type) === -1) {
            throw new Error('Invalid Child Composition')
          }
        })
        cards.push({
          isOpen: child.props.isOpen || false,
          ...this.mkIds(),
          node: child,
        })
      })
    } catch (err) {
      debugger
    }
    this.setState({ cards })
  }
  toggleCard(e, i) {
    console.log(e.currentTarget)
    if (e.currentTarget.getAttribute('aria-disabled')) {
      e.preventDefault()
      return
    }
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
        cards: this.state.cards.map((cardState, j) =>
          i === j ? { ...cardState, isOpen: !cardState.isOpen } : cardState
        ),
      })
    }
  }
  handleKeyDown(e, index) {
    const { cards } = this.state
    if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
      e.target.click()
    }
    if ([keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
      let newIndex
      if (e.which === keyCodes.up) {
        newIndex = index > 0 ? index - 1 : cards.length - 1
      } else if (e.which == keyCodes.down) {
        newIndex = index >= cards.length - 1 ? 0 : index + 1
      }
      try {
        const nextId = this.state.cards[newIndex].headerId
        // this.el.querySelector(`button[aria-controls="${nextId}"]`).focus()
        this.el.querySelector(`#${nextId}`).focus()
      } catch (err) {
        console.warn('focus dom element not found')
        debugger
      }
    }
  }
  setCardCollapseState(i, status) {
    this.setState({
      cards: this.state.cards.map((cardState, j) =>
        i === j ? { ...cardState, status } : cardState
      ),
    })
  }
  isDisabled(index) {
    if (!this.props.exclusive) return false
    if (index === this.state.cards.findIndex(({ isOpen }) => !!isOpen)) {
      return true
    }
  }
  componentDidMount() {
    this.parseChildren()
  }

  render() {
    return (
      <div ref={el => (this.el = el)}>
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
        {this.state.cards.map(({ isOpen, headerId, panelId, node }, index) => (
          <RolodexCard
            isOpen={isOpen}
            onClick={e => this.toggleCard(e, index)}
            onKeyDown={e => this.handleKeyDown(e, index)}
            headerId={headerId}
            panelId={panelId}
            disabled={this.isDisabled(index)}
            key={index}
            {...node.props}
          />
        ))}
      </div>
    )
  }
}

export default Rolodex
