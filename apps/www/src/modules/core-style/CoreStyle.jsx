import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { Page, JumpNav, Breadcrumb, BreadcrumbItem } from '@cwds/components'
/* eslint-disable import/no-webpack-loader-syntax */
import CoreStyle from '!babel-loader!@mdx-js/loader!./CoreStyle.mdx'

const toSlug = str =>
  slugify(str, {
    replacement: '-',
    lower: true,
  })

const routes = [
  'Experience Principles',
  'Functional CSS',
  'Spacing',
  'Color System',
  'Accessibility',
  'Iconography',
  'Typography',
  'Tone',
].map(title => ({ title, path: `#${toSlug(title)}` }))

class CoreStylePage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    return (
      <Page
        title="Core Style"
        layout="jumpnav"
        Breadcrumb={() => (
          <Breadcrumb>
            {[
              { title: 'Home', path: '/' },
              { title: 'Core Style', path: '/core-style' },
            ].map(d => (
              <BreadcrumbItem key={d.path}>
                <Link to={d.path}>{d.title}</Link>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
        sidenav={() => <JumpNav tag={Link} routes={routes} />}
        main={() => <CoreStyle />}
      />
    )
  }
}

export default CoreStylePage
