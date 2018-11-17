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
    level: PropTypes.number,
    initOpenKeys: PropTypes.arrayOf(PropTypes.string),
  }
  static defaultProps = {
    initOpenKeys: [],
  }
  ALLOWED_CHILD_TYPES = [Card]
  ALLOWED_GRANDCHILD_TYPES = [CardHeader, CardBody, CardFooter]
  rolodexId = uniqueId()
  constructor(props) {
    super(props)

    this.toggleCard = this.toggleCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.validateChildren()
    this.state = {
      keys: this.initKeys(),
    }
  }
  // TODO: use id's if provided, generate if not
  initKeys() {
    const keys = []
    React.Children.forEach(this.props.children, card => {
      keys.push({
        key: card.key,
        isOpen: this.props.initOpenKeys.indexOf(card.key) > -1,
        headerId: `rolodex-${this.rolodexId}__header-${card.key}`,
        panelId: `rolodex-${this.rolodexId}__panel-${card.key}`,
        ref: React.createRef(),
      })
    })
    return keys
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
  toggleCard(e, key) {
    if (e.currentTarget.getAttribute('aria-disabled') === 'true') {
      e.preventDefault()
      return
    }
    const { exclusive, collapsible } = this.props
    this.setState({
      keys: this.state.keys.map(d => ({
        ...d,
        isOpen: d.key !== key ? (exclusive ? false : d.isOpen) : !d.isOpen,
      })),
    })
  }
  handleKeyDown(e, key) {
    if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
      e.target.click()
    }
    if (
      [keyCodes.up, keyCodes.down].indexOf(e.which) > -1 ||
      ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
    ) {
      let newIndex
      const index = this.state.keys.findIndex(d => d.key === key)
      if (e.which === keyCodes.up || (e.which === keyCodes.p && e.ctrlKey)) {
        newIndex = index > 0 ? index - 1 : this.state.keys.length - 1
      } else if (
        e.which == keyCodes.down ||
        (e.which === keyCodes.n && e.ctrlKey)
      ) {
        newIndex = index >= this.state.keys.length - 1 ? 0 : index + 1
      }
      this.setFocus(newIndex)
    }
  }
  setFocus(index) {
    const { ref } = this.state.keys[index]
    ref.current.focus()
  }
  isDisabled() {
    return false
  }
  render() {
    const {
      exclusive,
      collapsible,
      animate,
      aggregateControl,
      level,
      initOpenKeys,
      ...restProps
    } = this.props
    return (
      <div {...restProps} ref={el => (this.el = el)} className={Styles.Rolodex}>
        {React.Children.map(this.props.children, card => {
          const [cardHeader, ...restCardParts] = React.Children.toArray(
            card.props.children
          )
          const { isOpen, headerId, panelId, ref } = this.state.keys.find(
            ({ key }) => key === card.key
          )
          return React.cloneElement(card, {
            className: cn(card.props.className, 'mb-0'),
            children: (
              <React.Fragment>
                <RolodexHeader
                  {...cardHeader.props}
                  isOpen={isOpen}
                  headerId={headerId}
                  panelId={panelId}
                  onClick={e => this.toggleCard(e, card.key)}
                  onKeyDown={e => this.handleKeyDown(e, card.key)}
                  disabled={this.isDisabled(card.key)}
                  children={cardHeader.props.children}
                  ref={ref}
                />
                <RolodexPanel
                  isOpen={isOpen}
                  animate={this.props.animate}
                  panelId={panelId}
                  headerId={headerId}
                >
                  {restCardParts}
                </RolodexPanel>
              </React.Fragment>
            ),
          })
        })}
      </div>
    )
  }
}

export default Rolodex
