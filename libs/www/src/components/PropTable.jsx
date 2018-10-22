import React from 'react'
import PropTypes from 'prop-types'

const PropTable = ({ propDefs }) => {
  return (
    <pre>
      <code>{JSON.stringify(propDefs, null, 2)}</code>
    </pre>
  )
}
PropTable.propTypes = {
  propDefs: PropTypes.object,
}
PropTable.defaultProps = {
  propDefs: {},
}

export default PropTable
