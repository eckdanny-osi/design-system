import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'

const toSlug = str => slugify(toString(str), { replacement: '-', lower: true })

function toString(elOrEls) {
  if (typeof elOrEls === 'string') return elOrEls
  if (elOrEls.props) {
    const children = elOrEls.props.children
    return children ? toString(children) : ''
  }
  if (Array.isArray(elOrEls)) {
    if (elOrEls.every(el => typeof el === 'string')) {
      return elOrEls.join('')
    } else {
      return elOrEls.map(el => toString(el)).join('')
    }
  } else {
    throw new Error('Could not create a slug')
  }
}

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
