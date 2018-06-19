import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { withCssModule } from './utils';
import Styles from './utils.test.module.scss';

describe('withCssModule', () => {
  let myWrappedComponent, MyComponent;

  beforeEach(() => {
    class MyWrappedComponent extends Component {
      static propTypes = {
        myBool: PropTypes.bool,
        myString: PropTypes.string,
      };
      static defaultProps = {
        myBool: true,
      };
      static myStaticMethod() {
        return 'hi';
      }
      render() {
        return <div>Hello World</div>;
      }
    }
    myWrappedComponent = MyWrappedComponent;
  });

  afterEach(() => ([myWrappedComponent, MyComponent] = [null, null]));

  it('returns a component', () => {
    MyComponent = withCssModule(myWrappedComponent);
    expect(MyComponent).toEqual(jasmine.any(Function));
  });

  it('injects the cssModule prop on the WrappedComponent', () => {
    const myCssModule = {};
    MyComponent = withCssModule(myWrappedComponent, myCssModule);
    const wrapper = shallow(<MyComponent />);
    expect(
      wrapper
        .find(myWrappedComponent)
        .first()
        .prop('cssModule')
    ).toBe(myCssModule);
  });

  it('hoists propTypes', () => {
    MyComponent = withCssModule(myWrappedComponent, {}, 'myString');
    expect(MyComponent.propTypes.myBool).toBeDefined();
    expect(MyComponent.propTypes.myString).not.toBeDefined();
  });

  it('hoists defaultProps', () => {
    MyComponent = withCssModule(myWrappedComponent, {}, 'myString');
    expect(MyComponent.defaultProps.myBool).toEqual(true);
  });

  it('hoists static methods', () => {
    MyComponent = withCssModule(myWrappedComponent);
    expect(MyComponent.myStaticMethod()).toEqual('hi');
  });

  it('adds a displayName', () => {
    MyComponent = withCssModule(myWrappedComponent);
    expect(MyComponent.displayName).toEqual(
      expect.stringMatching(/^withCssModule\(.+\)$/)
    );
  });
});
