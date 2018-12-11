import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container, Row, Col } from '@cwds/reactstrap'
import Styles from '../Layout.module.scss'

const Body = ({ layout, sidenav: SideNav, main: Main }) => {
  return (
    <div className={cn('pt-3', Styles.Body)}>
      <Container>
        {layout === 'dashboard' && (
          <div role="main">
            <Main />
          </div>
        )}
        {layout === 'subroutes' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {<SideNav />}
            </Col>
            <Col role="main" sm={7} md={9}>
              {<Main />}
            </Col>
          </Row>
        )}
        {layout === 'jumpnav' && (
          <Row>
            <Col role="navigation" sm={5} md={3}>
              {<SideNav />}
            </Col>
            <Col role="main" sm={7} md={9}>
              {<Main />}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}

Body.propTypes = {
  layout: PropTypes.oneOf(['dashboard', 'subroutes', 'jumpnav']),
  sidenav: PropTypes.any,
  main: PropTypes.any,
}

Body.defaultProps = {
  layout: 'dashboard',
  sidenav: () => null,
}

export default Body
