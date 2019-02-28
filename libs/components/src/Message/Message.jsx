import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'
import Styles from '../Layouts/Layout.module.scss'

const Message = ({ children }) => (
  <div className={Styles.Messages}>
    <Row>
      <Col>{children}</Col>
    </Row>
  </div>
)

Message.propTypes = {
  children: PropTypes.node,
}

export default Message
