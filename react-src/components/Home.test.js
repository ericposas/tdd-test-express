import React, { Component } from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

beforeEach(() => {
  jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f())
})

test('component should have text content', () => {
  const wrapper = shallow(<Home/>)
  expect(wrapper.hasClass('main-container'))
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})
