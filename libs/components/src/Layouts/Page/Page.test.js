import Page from './Page';
import { shallow } from 'enzyme';

describe.skip('Page', () => {
  it('renders', () => {
    expect(() => shallow(<Page />)).not.toThrow();
  });
});
