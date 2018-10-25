import React from 'react'
import ColUnstyled from 'reactstrap/lib/Col'
import Styles from './Col.module.scss'

const Col = props => <ColUnstyled {...props} />
Col.propTypes = { ...ColUnstyled.propTypes }
Col.defaultProps = { ...ColUnstyled.defaultProps, cssModule: Styles }

export default Col
