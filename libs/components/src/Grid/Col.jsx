import React from 'react'
import getDisplayName from 'react-display-name'
import { Col as ColUnstyled } from 'reactstrap'
// import Styles from './Col.module.scss'

const Col = props => <ColUnstyled {...props} />
Col.displayName = `cares(${getDisplayName(ColUnstyled)})`
Col.propTypes = { ...ColUnstyled.propTypes }
Col.defaultProps = { ...ColUnstyled.defaultProps }

export default Col
