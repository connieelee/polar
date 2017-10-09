import defaultUtilities, * as utilities from './utilities'
import { database } from '../../../firebase'

afterAll(() => database.goOffline())

describe('Utilities', () => {
  describe('Generate key', () => {
    test('it only creates integers 1-4', () => {
      const keyed = utilities.generateKey()
      keyed
        .split('')
        .map(str => parseInt(str, 10))
        .forEach((num) => {
          expect(num).toBeGreaterThanOrEqual(1)
          expect(num).toBeLessThanOrEqual(4)
        })
    })
    test('it generates a number', () =>
      expect(typeof utilities.generateKey()).toBe('string'),
    )
    test('it generates a number of length four', () =>
      expect(utilities.generateKey().length).toBe(4),
    )
  })

  describe('objectNotEmpty', () => {
    test('it returns false if an object isn\'t empty', () => {
      expect(utilities.objectNotEmpty({ a: true })).toBe(true)
    })
    test('it returns false if object is empty', () => {
      expect(utilities.objectNotEmpty({})).toBe(false)
    })
  })

  describe('getKey', () => {
    test('generates a valid hash', async () => {
      const key = await utilities.getKey()
      expect(key.length).toBe(4)
      expect(typeof key).toBe('string')
    })
  })
})

