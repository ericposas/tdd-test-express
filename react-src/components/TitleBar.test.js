import React, { Component } from 'react'
import { shallow } from 'enzyme'
import TitleBar from './TitleBar'

test('should render title prop', () => {
  const title = 'My title'
  const wrapper = shallow(
    <TitleBar
    title={title}
    />
  )
  console.log(wrapper.type())
  expect(wrapper.text()).toEqual(title)
  expect(wrapper.find('TitleDiv').props().theme).toBeDefined()
  expect(wrapper.find('TitleDiv').props().padding).toBeDefined()

})
