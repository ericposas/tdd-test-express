/**
 * @jest-environment jsdom
 */
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

test('component should render', () => {
  const content = 'home test.'
  render(<App />)
  expect(screen.queryByText(content)).toBeInTheDocument()
})
