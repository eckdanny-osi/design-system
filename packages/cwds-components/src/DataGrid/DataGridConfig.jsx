import React, { Fragment } from 'react';
import { ReactTableDefaults } from 'react-table';
import Pagination from './Pagination';
import Button from '../Button';
import Icon from '../Icon';

const PagerButtonFactory = ({ rotation }) => props => {
  const { children, ...passProps } = props;
  return (
    <Fragment>
      <span className="sr-only">{children}</span>
      <Button {...passProps} color="info" aria-label={children}>
        <Icon aria-hidden="true" icon="chevronDown" rotation={rotation} />
      </Button>
    </Fragment>
  );
};

const DataGridDefaults = {
  NextComponent: PagerButtonFactory({ rotation: 270 }),
  PaginationComponent: Pagination,
  PreviousComponent: PagerButtonFactory({ rotation: 90 }),
  defaultPageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
};

export const config = config =>
  Object.assign(ReactTableDefaults, DataGridDefaults, config);
