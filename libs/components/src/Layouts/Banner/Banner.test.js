import React from 'react';
import Banner from '../Banner';
import BreadcrumbTail from '../../BreadcrumbTrail';
import { shallow, mount } from 'enzyme';

describe('Banner', () => {
  it('renders', () => {
    expect(() => shallow(<Banner />)).not.toThrow();
  });

  describe('breadcrumb prop', () => {
    it('accepts a react element', () => {
      const MyComponent = () => <div>test</div>;
      const wrapper = shallow(<Banner breadcrumb={<MyComponent />} />);
      expect(wrapper.find(MyComponent).length).toBe(1);
    });
    it('accepts a renderFn', () => {
      const myRenderFn = jest.fn().mockReturnValueOnce(<div id="renderFn" />);
      const wrapper = shallow(<Banner breadcrumb={myRenderFn} />);
      expect(myRenderFn).toHaveBeenCalledTimes(1);
      expect(wrapper.find('#renderFn')).toHaveLength(1);
    });
    it('accepts items: Array<{path: string, title: string}>', () => {
      const trail = [
        { title: 'Foo', path: '/foo' },
        { title: 'Bar', path: '/foo/bar' },
        { title: 'Quo', path: '/foo/bar/quo' },
      ];
      const wrapper = shallow(<Banner breadcrumb={trail} />);
      expect(wrapper.find(BreadcrumbTail).prop('items')).toBe(trail);
    });
  });
});
