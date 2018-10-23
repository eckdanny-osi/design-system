import React from 'react'
import getDisplayName from 'react-display-name'
import { Row as RowUnstyled } from 'reactstrap'
// import Styles from './Row.module.scss'

const Row = props => <RowUnstyled {...props} />
Row.displayName = `cares(${getDisplayName(RowUnstyled)})`
Row.propTypes = { ...RowUnstyled.propTypes }
Row.defaultProps = { ...RowUnstyled.defaultProps }

export default Row
