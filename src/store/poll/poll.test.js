import * as pollRedux from './index'

describe('Poll Action Creators', () => {
  const poll = {
    ownerId: 1,
    anonymous: true,
    showResultsInRealTime: true,
    open: false,
  }

  test('createPoll', () => {
    expect(pollRedux.createPoll(poll)).toEqual({ type: 'CREATE_POLL', poll })
  })

  test('readPoll', () => {
    expect(pollRedux.readPoll(poll)).toEqual({ type: 'READ_POLL', poll })
  })

  test('updatePoll', () => {
    expect(pollRedux.updatePoll(poll)).toEqual({ type: 'UPDATE_POLL', poll })
  })

  test('deletePoll', () => {
    expect(pollRedux.deletePoll()).toEqual({ type: 'DELETE_POLL' })
  })
})
