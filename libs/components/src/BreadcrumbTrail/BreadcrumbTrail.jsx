import React from 'react'
import cn from 'classnames'
import { Breadcrumb, BreadcrumbItem } from '@cwds/reactstrap'
import Styles from './BreadcrumbTrail.module.scss'

const LinkTag = ({ active, path, title, ...props }) => (
  <a href={active ? undefined : path} {...props}>
    {title}
  </a>
)

const BreadcrumbTrail = ({ items = [], tag: Tag = LinkTag }) => {
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
          <React.Fragment key={i}>
            {i !== 0 && <div className="mx-2 text-primary">/</div>}
            <BreadcrumbItem
              tag={Tag}
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

export default BreadcrumbTrail
