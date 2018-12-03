import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Row, Col } from '@cwds/reactstrap'
import Styles from './Placeholder.module.scss'

// TODO: the `rows` and `cols` props should have the same reponsive prop format
//       as the `Col` [size] interface (reactstrap)

const PlaceholderLine = ({ className, children, tag: Tag, ...props }) => (
  <Tag className={cn(className, 'mb-2 p-1', Styles['Placeholder'])} {...props}>
    {children || 'placeholder'}
  </Tag>
)
PlaceholderLine.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}
PlaceholderLine.defaultProps = {
  tag: 'p',
}

const Placeholder = ({ cols, rows, tag: Tag }) => {
  return cols > 1 ? (
    <Row>
      {new Array(cols).fill().map((_, i) => {
        return (
          <Col key={i} className={Styles['PlaceholderContainer']}>
            {new Array(rows).fill().map((_, j) => (
              <Tag key={j} />
            ))}
          </Col>
        )
      })}
    </Row>
  ) : (
    <div className={Styles['PlaceholderContainer']}>
      <Tag>placeholder</Tag>
    </div>
  )
}
Placeholder.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
}
Placeholder.defaultProps = {
  cols: 1,
  rows: 4,
  tag: PlaceholderLine,
}

export default Placeholder

function indexArray(len) {
  return new Array(len).fill().map((_, i) => i)
}
