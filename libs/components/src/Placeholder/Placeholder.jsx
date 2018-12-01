import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'

// TODO: the `rows` and `cols` props should have the same reponsive prop format
//       as the `Col` [size] interface (reactstrap)

const ShimmerLine = () => <div>shimmer</div>

const Placeholder = ({ cols, rows, tag: Tag }) => {
  return cols > 1 ? (
    <Row>
      {new Array(cols).fill().map((_, i) => {
        return (
          <Col key={i}>
            {new Array(rows).fill().map((_, j) => {
              return <Tag key={j} />
            })}
          </Col>
        )
      })}
    </Row>
  ) : (
    <span>alksdfj</span>
  )
}
Placeholder.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  // TODO: what is the right tag here?
  // tag: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}
Placeholder.defaultProps = {
  cols: 1,
  rows: 4,
  tag: ShimmerLine,
}

export default Placeholder

function indexArray(len) {
  return new Array(len).fill().map((_, i) => i)
}
