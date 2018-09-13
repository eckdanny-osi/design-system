import React from 'react';
import { ReactTableDefaults } from 'react-table';
import Pagination from './Pagination';
import Button from '../Button';
import Icon from '../Icon';

const PagerButton = props => <Button {...props} color="info" />;

const DataGridDefaults = {
  NextComponent: PagerButton,
  PaginationComponent: Pagination,
  PreviousComponent: PagerButton,
  defaultPageSize: 10,
  nextText: <Icon icon="chevronDown" rotation={270} />,
  pageSizeOptions: [5, 10, 25, 50],
  previousText: <Icon icon="chevronDown" rotation={90} />,
};

export const config = config =>
  Object.assign(ReactTableDefaults, DataGridDefaults, config);
