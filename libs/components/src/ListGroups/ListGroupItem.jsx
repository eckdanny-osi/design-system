import React from 'react';
import { ListGroupItem as ListGroupItemUnstyled } from 'reactstrap';
import Styles from './ListGroups.module.scss';

const ListGroupItem = props => <ListGroupItemUnstyled {...props} />;
ListGroupItem.propTypes = { ...ListGroupItemUnstyled.propTypes };
ListGroupItem.defaultProps = {
  ...ListGroupItemUnstyled.defaultProps,
  cssModule: Styles,
};

export { ListGroupItemUnstyled };
export default ListGroupItem;
