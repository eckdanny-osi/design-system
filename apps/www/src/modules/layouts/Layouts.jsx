import React from 'react'
import { Link } from 'react-router-dom'
import {
  Page,
  AnchorNav,
  AppBar,
  Container,
  PageHeader,
  Breadcrumb,
} from '@cwds/components'
/* eslint-disable import/no-webpack-loader-syntax */
import PageComposition from '!babel-loader!@mdx-js/loader!./views/PageComposition.mdx'
import Dashboard from '!babel-loader!@mdx-js/loader!./views/Dashboard.mdx'
import JumpNav from '!babel-loader!@mdx-js/loader!./views/JumpNav.mdx'
import SubRoutes from '!babel-loader!@mdx-js/loader!./views/SubRoutes.mdx'

const routes = [
  {
    title: 'Page Composition',
    slug: 'page-composition',
    component: PageComposition,
  },
  {
    title: 'The Templates',
    slug: 'templates',
    component: () => <h2>The Templates</h2>,
    children: [
      // {
      //   title: 'Basic Content',
      //   slug: 'basic-content',
      //   component: BasicContentSection,
      // },
      {
        title: 'Dashboard',
        slug: 'dashboard',
        component: Dashboard,
      },
      {
        title: 'JumpNav',
        slug: 'jumpnav',
        component: JumpNav,
      },
      {
        title: 'SubRoutes',
        slug: 'subroutes',
        component: SubRoutes,
      },
    ],
  },
]

export default () => {
  return (
    <Page
      title="Layouts"
      breadcrumb={[
        { path: '/', title: 'Home' },
        { path: '/page-layouts', title: 'Layouts' },
      ]}
      layout="jumpnav"
      sidenav={() => <div />}
      main={() => <div>{routes.map(renderSection)}</div>}
    />
  )
}

export const _default = () => {
  return (
    <div>
      <AppBar />
      <PageHeader title="Layouts" />
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Layouts</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container>
        <AnchorNav.Container
          renderNav={() => (
            <AnchorNav
              offset={135}
              items={routes}
              renderItem={({ slug, title }) => <a href={`#${slug}`}>{title}</a>}
            />
          )}
          renderMain={() => <div>{routes.map(renderSection)}</div>}
        />
      </Container>
    </div>
  )
}

function renderSection({ title, slug, children, component: Component }) {
  if (children) {
    return (
      <AnchorNav.Section key={slug} id={slug}>
        <Component />
        {children.map(renderSection)}
      </AnchorNav.Section>
    )
  } else {
    return (
      <AnchorNav.Section key={slug} id={slug}>
        <Component />
        <hr className="my-4" />
      </AnchorNav.Section>
    )
  }
}
