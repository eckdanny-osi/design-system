import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Collapse,
} from '@cwds/reactstrap'
import Icon from '@cwds/icons'

class RolodexCard extends Component {
  // static propTypes = {
  //   Header: PropTypes.oneOfType([ CardHeader ]),
  //   Panel: PropTypes.arrayOf(PropTypes.oneOfType([CardBody,    CardFooter]))
  // }
  render() {
    const { isOpen, Header, Panel, onToggle, id } = this.props
    return (
      <Card className="mb-0">
        <Header
          {...Header.props}
          className={cn(Header.props.className, {
            'border-bottom-0': !isOpen, // && status !== 'exiting'
          })}
          tag="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          // aria-controls={}
          onKeyDown={e => console.log(e)}
          ref={el => (this.headerRef = el)}
        >
          {Header.props.children}
          <div className={cn(Style.RolodexToggle)}>
            <Icon name="chevron-down" rotation={!isOpen ? undefined : 180} />
          </div>
        </Header>
        <Collapse
          isOpen={isOpen}
          onEntering={() => this.setCardCollapseState(index, 'entering')}
          onEntered={() => this.setCardCollapseState(index, 'entered')}
          onExiting={() => this.setCardCollapseState(index, 'exiting')}
          onExited={() => this.setCardCollapseState(index, 'exited')}
        >
          <div id={id} ref={el => (this.panelRef = el)}>
            <Panel />
          </div>
        </Collapse>
      </Card>
    )
  }
}
