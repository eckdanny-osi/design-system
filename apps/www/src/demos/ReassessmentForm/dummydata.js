import React from 'react'
import { MenuItem, UncontrolledMenu as Menu } from '@cwds/components'
import { Link } from 'react-router-dom'

export const data = [
  {
    Action: 'Approve',
    Assesment_Date: '08/14/2011',
    Case_Number: '98234-3486492-843847',
    County: 'San Joaquin',
    Last_Updated: '08/14/2018',
    Updated_by: 'Adams, Jason',
  },
  {
    Action: 'Approve',
    Assesment_Date: '08/14/2018',
    Case_Number: '98234-3486492-843847',
    County: 'San Joaquin',
    Last_Updated: '08/14/2018',
    Updated_by: 'John, Jason',
  },
  {
    Action: 'Delete',
    Assesment_Date: '08/14/2018',
    Case_Number: '98234-3486492-843847',
    County: 'San Joaquin',
    Last_Updated: '08/14/2018',
    Updated_by: 'Adams, Jason',
  },
  {
    Action: 'Approve',
    Assesment_Date: '08/14/2017',
    Case_Number: '98234-3486492-843847',
    County: 'San Joaquin',
    Last_Updated: '08/14/2018',
    Updated_by: 'Adams, Jason',
  },
  {
    Action: 'Approve',
    Assesment_Date: '08/14/2016',
    Case_Number: '98234-3486492-843847',
    County: 'San Joaquin',
    Last_Updated: '08/14/2018',
    Updated_by: 'Adams, Jason',
  },
  {
    Action: 'Approve',
    Assesment_Date: '08/14/2011',
    Case_Number: '98234-3486492-843847',
    County: 'San Joaquin',
    Last_Updated: '08/14/2018',
    Updated_by: 'Adams, Jason',
  },
]

export const columns = [
  {
    Header: 'Assesment Date',
    accessor: 'Assesment_Date',
    Cell: row => <Link to="/">{row.value}</Link>,
  },
  { Header: 'Case Number', accessor: 'Case_Number', width: 250 },
  { Header: 'County', accessor: 'County' },
  { Header: 'Last Updated', accessor: 'Last_Updated' },
  { Header: 'Updated by', accessor: 'Updated_by' },
  {
    Header: '',
    accessor: 'Action',
    width: 50,
    Cell: row => {
      return (
        <Menu size="sm">
          <MenuItem>{row.value}</MenuItem>
        </Menu>
      )
    },
  },
]
