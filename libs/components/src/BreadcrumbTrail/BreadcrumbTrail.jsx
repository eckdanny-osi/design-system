import React from 'react'
import { Breadcrumb, BreadcrumbItem } from '@cwds/reactstrap'
import PropTypes from 'prop-types'

const LinkTag = ({ active, path, title, ...props }) => (
  <a href={active ? undefined : path} {...props}>
    {title}
  </a>
)

const propTypes = {
  /** List of breadcrumbs items. Item should contain `path` and `title` fields. */
  items: PropTypes.array,
}

const BreadcrumbTrail = ({ items = [] }) => {
  return (
    <Breadcrumb
      listClassName="p-0 m-0 bg-transparent"
      tag="nav"
      listTag="div"
      style={{ width: 'max-content' }}
    >
      {items.map((item, i) => {
        const active = i + 1 === items.length
        return (
          <React.Fragment key={item.path}>
            {i !== 0 && <div className="mx-2 text-primary">/</div>}
            <BreadcrumbItem
              tag={LinkTag}
              active={active}
              path={item.path}
              title={item.title}
            />
          </React.Fragment>
        )
      })}
    </Breadcrumb>
  )
}

BreadcrumbTrail.propTypes = propTypes

export default BreadcrumbTrail
