import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container, Row, Col } from '@cwds/reactstrap'
import Styles from '../Layout.module.scss'

const Body = ({ layout, sidenav: SideNav, main: Main }) => {
  const sidenav = typeof SideNav === 'function' ? <SideNav /> : SideNav
  const main = typeof Main === 'function' ? <Main /> : Main

  return (
    <div className={cn('pt-3', Styles.Body)}>
      <Container>
        {layout === 'dashboard' && <div role="main">{main}</div>}
        {layout === 'subroutes' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {sidenav}
            </Col>
            <Col role="main" sm={7} md={9}>
              {main}
            </Col>
          </Row>
        )}
        {layout === 'jumpnav' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {sidenav}
            </Col>
            <Col role="main" sm={7} md={9}>
              {main}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

Body.propTypes = {
  layout: PropTypes.oneOf(['dashboard', 'subroutes', 'jumpnav']),
  sidenav: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  main: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

Body.defaultProps = {
  layout: 'dashboard',
  main: null,
  sidenav: null,
}

export default Body
