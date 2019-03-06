import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slugify from 'slugify'
import { Page, JumpNav, Breadcrumb, BreadcrumbItem } from '@cwds/components'
/* eslint-disable import/no-webpack-loader-syntax */
import AboutCares from '!babel-loader!@mdx-js/loader!./AboutCares.mdx'

const namedAnchors = [
  {
    title: 'Consider Your Audience',
    path: `#${slugify(
      'Consider Your Audience: Worker, Supplemental Support, Youth/Family',
      { replacement: '-', lower: true }
    )}`,
  },
  {
    title: 'CARES Personality',
    path: `#${slugify('CARES’ Personality: The Assistant', {
      replacement: '-',
      lower: true,
    })}`,
  },
]

class AboutCaresPage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }
  render() {
    return (
      <Page
        title="Start Here: Focusing on Users"
        layout="jumpnav"
        Breadcrumb={
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>About Cares</BreadcrumbItem>
          </Breadcrumb>
        }
        sidenav={<JumpNav tag={Link} routes={namedAnchors} />}
        main={<AboutCares />}
      />
    )
  }
}

export default AboutCaresPage
