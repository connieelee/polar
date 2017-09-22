import * as user from './index'

describe('User Action Creators', () => {
  test('getUser', () => {
    const user = {
      id: '1234',
      name: 'name',
    }

    expect(user.getUser(user)).toBe({ type: 'GET_USER', user })
  })
})
