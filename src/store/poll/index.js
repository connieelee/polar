const CREATE_POLL = 'CREATE_POLL'
const READ_POLL = 'READ_POLL'
const UPDATE_POLL = 'UPDATE_POLL'
const DELETE_POLL = 'DELETE_POLL'

export const createPoll = poll => ({ type: CREATE_POLL, poll })
export const readPoll = poll => ({ type: READ_POLL, poll })
export const updatePoll = poll => ({ type: UPDATE_POLL, poll })
export const deletePoll = () => ({ type: DELETE_POLL })
