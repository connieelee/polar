import * as userRedux from './index'
describe('User Action Creators', () => {
  test('getUser', () => {
    const user = {
      id: '1234',
      name: 'name',
    }
    expect(userRedux.getUser(user)).toEqual({ type: 'GET_USER', user })
  })

})
