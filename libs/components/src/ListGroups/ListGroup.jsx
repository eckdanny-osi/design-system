import React from 'react'
import { ListGroup as ListGroupUnstyled } from 'reactstrap'
import Styles from './ListGroups.module.scss'

const ListGroup = props => <ListGroupUnstyled {...props} />
ListGroup.propTypes = { ...ListGroupUnstyled.propTypes }
ListGroup.defaultProps = {
  ...ListGroupUnstyled.defaultProps,
  cssModule: Styles,
}

export { ListGroup }
export default ListGroup
