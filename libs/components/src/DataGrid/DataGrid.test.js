import React from 'react';
import { shallow, render } from 'enzyme';
import DataGrid from './DataGrid';

describe('DataGrdi', () => {
  it('pass', () => {
    expect(true).toBe(true);
  });

  it('renders', () => {
    // expect(() => shallow(<div>alksdfj</div>)).not.toThrow();
    expect(() => {
      const wrapper = render(
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
          className="-striped -highlight"
        />
      );
    }).not.toThrow();
  });
});
