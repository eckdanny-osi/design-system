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

const AnchorLink = ({
  children: text,
  tag: Tag,
  parentClassName,
  ...props
}) => {
  console.debug('AnchorLink!')
  const slug = toSlug(text)
  return (
    <Tag id={slug} className={parentClassName}>
      <a {...props} href={`#${slug}`}>
        {text}
      </a>
    </Tag>
  )
}

AnchorLink.propTypes = propTypes
AnchorLink.defaultProps = defaultProps

export default AnchorLink
