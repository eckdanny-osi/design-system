import React from 'react';
import Page from './Page';
import Banner from '../Banner';
import Body from '../Body';
import { shallow } from 'enzyme';

describe('Page', () => {
  it('has className defined', () => {
    expect(shallow(<Page />).hasClass('Page')).toBe(true);
  });
  it('renders a Banner and Body component', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.childAt(0).type()).toBe(Banner);
    expect(wrapper.childAt(1).type()).toBe(Body);
    expect(wrapper.children().length).toBe(2);
  });
  it('passes bannerProps to Banner', () => {
    const wrapper = shallow(
      <Page title="my-title" breadcrumb="my-breadcrumb" cta="my-cta" />
    );
    const banner = wrapper.find(Banner);
    expect(banner.prop('title')).toEqual('my-title');
    expect(banner.prop('breadcrumb')).toEqual('my-breadcrumb');
    expect(banner.prop('cta')).toEqual('my-cta');
  });
  it('passes bodyProps to Body', () => {
    const wrapper = shallow(
      <Page main="my-main" sidenav="my-sidenav" layout="dashboard" />
    );
    const body = wrapper.find(Body);
    expect(body.prop('main')).toEqual('my-main');
    expect(body.prop('sidenav')).toEqual('my-sidenav');
    expect(body.prop('layout')).toEqual('dashboard');
  });
});
