import React from 'react'
import useName from './useName'
import testHook from '../_test-hook'

beforeEach(() => {
  jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f())
})

test('custom hook should set the value we give to it', () => {
  const nameVal = 'Biff'
  const hookVal = testHook(() => useName(nameVal), false)
  expect(hookVal).toBe(nameVal)
})
