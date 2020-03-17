import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import { HashRouter as Router, Switch } from 'react-router-dom'

test('component should render', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
  wrapper.unmount()
})
