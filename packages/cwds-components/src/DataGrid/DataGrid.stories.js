import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs';

import DataGrid from './';

storiesOf('DataGrids', module)
  .addDecorator(withKnobs)
  .add(
    'DataGrid',
    withInfo()(() => {
      const data = [
        {
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          },
        },
      ];
      const columns = [
        {
          Header: 'Name',
          accessor: 'name', // String-based value accessors!
        },
        {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
        },
        {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name, // Custom value accessors!
        },
        {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age',
        },
      ];

      return <DataGrid data={data} columns={columns} />;
    })
  );
