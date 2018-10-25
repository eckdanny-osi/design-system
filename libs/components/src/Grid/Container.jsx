import React, { Component } from 'react'
import ContainerUnstyled from 'reactstrap/lib/Container'
import Styles from './Container.module.scss'

const Container = props => <ContainerUnstyled {...props} />
Container.propTypes = { ...ContainerUnstyled.propTypes }
Container.defaultProps = {
  ...ContainerUnstyled.defaultProps,
  cssModule: Styles,
}

export default Container
