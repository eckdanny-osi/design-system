import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CardTitle as CardTitleUnstyled } from 'reactstrap'
import Styles from './Cards.module.scss'

const CardTitle = props => <CardTitleUnstyled {...props} />
CardTitle.propTypes = { ...CardTitleUnstyled.propTypes }
CardTitle.defaultProps = {
  ...CardTitle.defaultProps,
  cssModule: Styles,
  tag: 'h3',
}

export default CardTitle
