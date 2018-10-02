import Page from './Page';
import { shallow } from 'enzyme';

describe('Page', () => {
  it('renders', () => {
    expect(() => shallow(<Page />)).not.toThrow();
  });
});
