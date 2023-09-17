import { describe, test, expect } from 'jest'

describe('Sanity Test', () => {
  test('Should return true', () => {
    expect(true).toBe(true)
  })

  test('Should return 3', () => {
    expect(3).toBe(1 + 2)
  })
})
