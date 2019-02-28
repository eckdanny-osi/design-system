import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'

describe('Message', () => {
  it('renders children', () => {
    const MyTree = _ => <div>hi</div>
    const wrapper = shallow(
      <Message>
        <MyTree />
      </Message>
    )
    expect(wrapper.find(MyTree).length).toBe(1)
  })
})
