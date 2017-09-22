import * as userRedux from './index'

describe('User Action Creators', () => {
  test('getUser', () => {
    const user = {
      id: '1234',
      name: 'name',
    }
    expect(userRedux.getUser(user)).toEqual({ type: userRedux.GET_USER, user })
  })

  test('removeUser', () => {
    expect(userRedux.removeUser()).toEqual({ type: userRedux.REMOVE_USER })
  })
})
