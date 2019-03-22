import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

import {
  Button,
  ButtonGroup,
  Page,
  Breadcrumb,
  BreadcrumbItem,
  JumpNav,
} from '@cwds/components'
import CollapsibleCardDemo from './CollapsibleCardDemo'
import SimpleCard from './SimpleCard'

class PrototypeCard extends Component {
  state = {
    layout: 'subroutes',
  }

  handleToggleClick = layout => _ => this.setState({ layout })

  render() {
    const isSubRoute = this.state.layout === 'subroutes'
    const namedAnchors = [
      {
        title: 'Yet Another Card',
        path: `#${slugify('Yet Another Card', {
          replacement: '-',
          lower: true,
        })}`,
      },
      {
        title: 'Collapsible Card',
        path: `#${slugify('Collapsible Card', {
          replacement: '-',
          lower: true,
        })}`,
      },
    ]
    return (
      <Page
        title="Card Prototype"
        layout={this.state.layout}
        Breadcrumb={
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Dashboard</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        }
        main={
          <div>
            <SimpleCard />
            <CollapsibleCardDemo />
          </div>
        }
        sidenav={<JumpNav routes={namedAnchors} />}
        PageActions={
          <ButtonGroup>
            <Button
              active={isSubRoute}
              aria-label="Side Nav"
              aria-pressed={isSubRoute}
              color="primary"
              onClick={this.handleToggleClick('subroutes')}
              size="sm"
            >
              Side Nav
            </Button>
            <Button
              active={!isSubRoute}
              aria-label="Full Width"
              aria-pressed={!isSubRoute}
              color="primary"
              size="sm"
              onClick={this.handleToggleClick('dashboard')}
            >
              Full Width
            </Button>
          </ButtonGroup>
        }
      />
    )
  }
}

export default PrototypeCard
