import { database } from '../../../firebase'

const defaultState = { loading: false }
const loadingState = { loading: true }

const CREATE_POLL = 'CREATE_POLL'
const READ_POLL = 'READ_POLL'
const UPDATE_POLL = 'UPDATE_POLL'
const DELETE_POLL = 'DELETE_POLL'
const REQUEST_POLL = 'REQUEST_POLL'
const POLL_ERROR = 'POLL_ERROR'

export const createPoll = poll => ({ type: CREATE_POLL, poll })
export const readPoll = poll => ({ type: READ_POLL, poll })
export const updatePoll = poll => ({ type: UPDATE_POLL, poll })
export const deletePoll = () => ({ type: DELETE_POLL })
export const requestPoll = () => ({ type: REQUEST_POLL })
export const pollError = error => ({ type: POLL_ERROR, error })

export const getPoll = pollId =>
  (dispatch) => {
    dispatch(requestPoll())
    const pollRef = database.ref(`/polls/${pollId}`)
    pollRef.once(
      'value',
      snap => dispatch(readPoll(Object.assign(snap.val(), { pollRef }))),
    )
  }

export const destroyPoll = pollRef =>
  dispatch =>
    pollRef.set(null)
      .then(() => dispatch(deletePoll()))
      .catch(error => dispatch(pollError(error)))

export const putPoll = (pollRef, updatedPoll) =>
  dispatch =>
    pollRef.set(updatedPoll)
      .then(() => dispatch(updatePoll(updatedPoll)))
      .catch(error => dispatch(pollError(error)))

export const postPoll = () =>
  (dispatch) => {
    database.ref('/polls').set()
  }


export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_POLL:
    case READ_POLL:
    case UPDATE_POLL:
      return action.poll
    case DELETE_POLL:
      return defaultState
    case REQUEST_POLL:
      return loadingState
    case POLL_ERROR:
      return action.error
    default:
      return state
  }
}

