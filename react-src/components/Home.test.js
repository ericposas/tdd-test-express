import React, { Component } from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

beforeEach(() => {
  jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f())
})

test('component should have text content', () => {
  const text = 'homie.'
  const wrapper = shallow(<Home name={text}/>)
  expect(wrapper.text()).toEqual(text)
  expect(wrapper.containsMatchingElement(<div>{text}</div>)).toBeTruthy()
  expect(wrapper.containsMatchingElement(<br/>)).toBeTruthy()
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})
