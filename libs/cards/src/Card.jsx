import React from 'react'
import { Card as CardUnstyled } from 'reactstrap'
import Styles from './Cards.module.scss'

const Card = props => <CardUnstyled {...props} />
Card.propTypes = { ...CardUnstyled.propTypes }
Card.defaultProps = { ...Card.defaultProps, cssModule: Styles }

export default Card
