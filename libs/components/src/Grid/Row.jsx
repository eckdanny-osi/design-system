import React from 'react';
import getDisplayName from 'react-display-name';
import RowUnstyled from 'reactstrap/lib/Row';
import Styles from './Row.module.scss';

const Row = props => <RowUnstyled {...props} />;
Row.displayName = `cares(${getDisplayName(RowUnstyled)})`;
Row.propTypes = { ...RowUnstyled.propTypes };
Row.defaultProps = { ...RowUnstyled.defaultProps, cssModule: Styles };

export default Row;
