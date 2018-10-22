import React from 'react'
import { CardFooter as CardFooterUnstyled } from 'reactstrap'
import Styles from './Cards.module.scss'

const CardFooter = props => <CardFooterUnstyled {...props} />
CardFooter.propTypes = { ...CardFooterUnstyled.propTypes }
CardFooter.defaultProps = {
  ...CardFooterUnstyled.defaultProps,
  cssModule: Styles,
}

export default CardFooter
