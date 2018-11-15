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
import RolodexPanel from './RolodexPanel'
import RolodexCard from './RolodexCard'
import Icon from '@cwds/icons'
import Styles from './Rolodex.module.scss'

const keyCodes = {
  ...Util.keyCodes,
  p: 80,
  n: 78,
}

class Rolodex extends Component {
  static propTypes = {
    exclusive: PropTypes.bool,
    collapsible: PropTypes.bool,
    animate: PropTypes.bool,
    aggregateControl: PropTypes.bool,
  }
  ALLOWED_CHILD_TYPES = [Card]
  ALLOWED_GRANDCHILD_TYPES = [CardHeader, CardBody, CardFooter]
  constructor(props) {
    super(props)

    this.toggleCard = this.toggleCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.renderChildren = this.renderChildren.bind(this)

    this.validateChildren()
    this.state = {
      keys: this.createKeyMap(),
    }
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
  createKeyMap() {
    const keys = {}
    React.Children.forEach(this.props.children, card => {
      keys[card.key] = {
        isOpen: false,
        ...this.mkIds(),
      }
    })
    return keys
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
        // https://github.com/facebook/react/issues/13381
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
  validateChildren() {
    if (!React.Children.count(this.props.children)) {
      throw new Error('Requires at least one child node')
    }
    React.Children.forEach(this.props.children, child => {
      if (this.ALLOWED_CHILD_TYPES.indexOf(child.type) === -1) {
        throw new Error('Encountered invalid child component!')
      }
      React.Children.forEach(child.props.children, grandchild => {
        if (this.ALLOWED_GRANDCHILD_TYPES.indexOf(grandchild.type) === -1) {
          throw new Error('Encountered invalid child component!')
        }
      })
    })
  }
  renderChildren() {
    return React.Children.map(this.props.children, card => {
      const [cardHeader, ...restCardParts] = React.Children.toArray(
        card.props.children
      )
      const { isOpen, headerId, panelId } = this.state.keys[card.key]
      return React.cloneElement(card, {
        className: cn(card.props.className, 'mb-0'),
        children: (
          <React.Fragment>
            <RolodexHeader
              isOpen={isOpen}
              id={headerId}
              panelId={panelId}
              onClick={e => this.toggleCard(e, card.key)}
              onKeyDown={e => this.handleKeyDown(e, card.key)}
              // disabled={this.isDisabled(card.key)}
            >
              {cardHeader}
            </RolodexHeader>
            <RolodexPanel
              isOpen={isOpen}
              animate={this.props.animate}
              id={panelId}
            >
              {restCardParts}
            </RolodexPanel>
          </React.Fragment>
        ),
      })
      // this.setState({ keys })
      // <RolodexCard
      //   animate={this.props.animate}
      //   isOpen={isOpen}
      //   onClick={e => this.toggleCard(e, index)}
      //   onKeyDown={e => this.handleKeyDown(e, index)}
      //   headerId={headerId}
      //   panelId={panelId}
      //   disabled={this.isDisabled(index)}
      //   key={headerId}
      //   {...node.props}
      // />
    })
  }
  toggleCard(e, key) {
    if (e.currentTarget.getAttribute('aria-disabled')) {
      e.preventDefault()
      return
    }
    const { exclusive, collapsible } = this.props
    if (exclusive) {
      const keys = Object.keys(this.state.keys).reduce((acc, k) => {
        const v = this.state.keys[k]
        return {
          ...acc,
          [k]:
            k !== key ? { ...v, isOpen: false } : { ...v, isOpen: !v.isOpen },
        }
      }, {})
      this.setState({ keys })
    } else {
      this.setState({
        keys: {
          ...this.state.keys,
          [key]: {
            ...this.state.keys[key],
            isOpen: !this.state.keys[key].isOpen,
          },
        },
      })
    }
  }
  handleKeyDown(e, key) {
    const { cards } = this.state
    if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
      e.target.click()
    }
    if (
      [keyCodes.up, keyCodes.down].indexOf(e.which) > -1 ||
      ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
    ) {
      let newIndex
      if (e.which === keyCodes.up || (e.which === keyCodes.p && e.ctrlKey)) {
        newIndex = index > 0 ? index - 1 : cards.length - 1
      } else if (
        e.which == keyCodes.down ||
        (e.which === keyCodes.n && e.ctrlKey)
      ) {
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
    // if (index === this.state.cards.findIndex(({ isOpen }) => !!isOpen)) {
    //   return true
    // }
  }
  // componentDidMount() {
  //   this.parseChildren()
  // }
  render() {
    // if (!this.state.cards.length) return null
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
        {/* {this.state.cards.map(({ isOpen, headerId, panelId, node }, index) => (
          <RolodexCard
            animate={this.props.animate}
            isOpen={isOpen}
            onClick={e => this.toggleCard(e, index)}
            onKeyDown={e => this.handleKeyDown(e, index)}
            headerId={headerId}
            panelId={panelId}
            disabled={this.isDisabled(index)}
            key={headerId}
            {...node.props}
          />
        ))} */}
        {this.renderChildren()}
      </div>
    )
  }
}

export default Rolodex
