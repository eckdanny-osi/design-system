import React from 'react'
import { shallow } from 'enzyme'
import DataGrid from './DataGrid'

describe('DataGrid', () => {
  it('pass', () => {
    expect(true).toBe(true)
  })

  it('renders', () => {
    expect(() => {
      shallow(
        <DataGrid
          data={[]}
          columns={[
            {
              Header: 'Name',
              columns: [
                {
                  Header: 'First Name',
                  accessor: 'firstName',
                },
                {
                  Header: 'Last Name',
                  id: 'lastName',
                  accessor: d => d.lastName,
                },
              ],
            },
          ]}
          defaultPageSize={10}
          className="-striped"
        />
      )
    }).not.toThrow()
  })

  it('has the highlight className', () => {
    const wrapper = shallow(<DataGrid data={[]} />)
    expect(wrapper.at(0).hasClass('-highlight')).toBe(true)
  })
  it('doesnot render pagination if the data set is less that defaultPageSie', () => {
    const wrapper = shallow(<DataGrid data={[]} />)
    expect(wrapper.props().showPagination).toBe(false)
  })
})
