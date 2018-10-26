import React from 'react'
import cn from 'classnames'
import { Container, Breadcrumb, BreadcrumbItem } from '@cwds/reactstrap'
import Styles from './BreadcrumbTrail.module.scss'

// @TODO: this should break!!! Only works because of lerna!
// import { NavLink } from 'react-router-dom';
const NavLink = props => <a href={props.to}>{props.children}</a>

const BreadcrumbTrail = ({ items = [], renderItem }) => {
  return (
    <div className={cn(Styles.BreadcrumbTrail)}>
      <Breadcrumb className="pt-0" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            {i !== 0 && <div className="mx-2 text-primary">/</div>}
            <BreadcrumbItem
              active={i + 1 === items.length ? true : false}
              tag={NavLink}
              to={item.path}
            >
              {item.title}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbTrail
