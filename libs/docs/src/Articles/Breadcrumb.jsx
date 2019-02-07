import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from '@cwds/components'

const ArticleBreadcrumb = ({ items }) => {
  return (
    <Breadcrumb>
      {[{ title: 'Home', path: '/' }, ...items].map((d, i, arr) => {
        return i + 1 < arr.length ? (
          <BreadcrumbItem key={d.path}>
            <Link to={d.path}>{d.title}</Link>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={d.path} active>
            {d.title}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

ArticleBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
}
ArticleBreadcrumb.defaultProps = {
  items: [],
}

export default ArticleBreadcrumb
