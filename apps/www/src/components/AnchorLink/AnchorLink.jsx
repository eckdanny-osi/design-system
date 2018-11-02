import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'

const toSlug = str => slugify(str, { replacement: '-', lower: true })

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

const defaultProps = {
  tag: 'span',
}

const AnchorLink = ({ children: text, tag: Tag }) => {
  console.debug('AnchorLink!')
  const slug = toSlug(text)
  return (
    <Tag id={slug}>
      <a href={`#${slug}`}>{text}</a>
    </Tag>
  )
}

AnchorLink.propTypes = propTypes
AnchorLink.defaultProps = defaultProps

export default AnchorLink
