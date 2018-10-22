import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Nav from '../Nav'
import Styles from './JumpNav.module.scss'

const naiveSolnJs = e => {
  e.preventDefault()
  const el = e.target.getAttribute('href').slice(1)
  const $el = document.getElementById(el)

  const rect = $el.getBoundingClientRect()
  const anchorOffset = window.pageYOffset + rect.top - (136 + 8.5 + 7)
  window.scrollTo(window.pageXOffset, anchorOffset)

  // @todo(dce): fix lame scroll thing
  // $el.scrollIntoView();
  // 136 + 8.5
}

const DefaulItemTag = ({ path, title, children, ...props }) => {
  return (
    <Nav.Item {...props}>
      <Nav.Link
        href={path}
        // onClick={naiveSolnJs}
      >
        {title}
      </Nav.Link>
    </Nav.Item>
  )
}

const propTypes = {
  routes: PropTypes.array,
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
}

const defaultProps = {
  routes: [],
  itemTag: DefaulItemTag,
}

const JumpNav = ({ routes, itemTag: ItemTag }) => (
  <Nav vertical className={cn(Styles['JumpNav'])}>
    {routes.map(({ path, title, children }) => (
      <ItemTag key={path} path={path} title={title} children={children} />
    ))}
  </Nav>
)

JumpNav.propTypes = propTypes
JumpNav.defaultProps = defaultProps

export default JumpNav
