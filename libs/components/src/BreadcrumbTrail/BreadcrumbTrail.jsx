import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from '@cwds/reactstrap'
import { withCaresConfig } from '../utils/CaresContext'
import PropTypes from 'prop-types'

const LinkTag = ({ active, path, title, ...props }) => (
  <a href={active ? undefined : path} {...props}>
    {title}
  </a>
)

/**
 * @todo use CSS instead of js iteration for spacers. (e.g.; not last :after { position: abs, content: '/' }). The iter impl was done so the "active" rectangle doesn't expand to include the seperator, but position abs fixes that
 * @todo the active item should not get underlined on hover
 */
class BreadcrumbTrail extends Component {
  renderMessage() {}

  renderItems() {
    const { items = [], tag, Breadcrumb, BreadcrumbItem } = this.props
    return (
      <Breadcrumb
        listClassName="p-0 m-0 bg-transparent"
        tag="nav"
        listTag="div"
        style={{ width: 'max-content' }}
      >
        {items.map(props => (
          <BreadcrumbItem {...props} tag={tag} key={props.path} />
        ))}
      </Breadcrumb>
    )
  }

  render() {
    if (this.props.items) return this.renderItems()
    return 'hi'
  }
}

BreadcrumbTrail.propTypes = {
  /** List of breadcrumbs items. Item should contain `path` and `title` fields. */
  items: PropTypes.array,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  Breadcrumb: PropTypes.func.isRequired,
  BreadcrumbItem: PropTypes.func.isRequired,
}

BreadcrumbTrail.defaultProps = {
  tag: LinkTag,
  Breadcrumb,
  BreadcrumbItem,
}

export default withCaresConfig(BreadcrumbTrail, [
  'Breadcrumb',
  'BreadcrumbItem',
])
