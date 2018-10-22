import React from 'react'
import getDisplayName from 'react-display-name'
import ColUnstyled from 'reactstrap/lib/Col'
import Styles from './Col.module.scss'

const Col = props => <ColUnstyled {...props} />
Col.displayName = `cares(${getDisplayName(ColUnstyled)})`
Col.propTypes = { ...ColUnstyled.propTypes }
Col.defaultProps = { ...ColUnstyled.defaultProps, cssModule: Styles }

export default Col
