import defaultUtilities, * as utilities from './utilities'
import { database } from '../../../firebase'

afterAll(() => database.goOffline())

describe('Utilities', () => {
  describe('Generate hash', () => {
    test('it only creates integers 1-4', () => {
      const hashed = utilities.generateHash()
      hashed
        .toString()
        .split('')
        .map(str => parseInt(str, 10))
        .forEach((num) => {
          expect(num).toBeGreaterThanOrEqual(1)
          expect(num).toBeLessThanOrEqual(4)
        })
    })
    test('it generates a number', () =>
      expect(typeof utilities.generateHash()).toBe('number'),
    )
    test('it generates a number of length four', () =>
      expect(utilities.generateHash().toString().length).toBe(4),
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

  describe('getHash', () => {
    test('generates a valid hash', async () => {
      const hash = await utilities.getHash()
      await defaultUtilities.createPoll()
      expect(hash.toString().length).toBe(4)
      expect(typeof hash).toBe('number')
    })
  })
})

