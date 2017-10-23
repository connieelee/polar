import { database } from '../../../firebase'
import utilities from './utilities'

const defaultState = { loading: false, subscribed: false, error: '' }

const CREATE_POLL = 'CREATE_POLL'
const READ_POLL = 'READ_POLL'
const UPDATE_POLL = 'UPDATE_POLL'
const DELETE_POLL = 'DELETE_POLL'
const REQUEST_POLL = 'REQUEST_POLL'
const REQUEST_COMPLETED = 'REQUEST_COMPLETED'
const POLL_ERROR = 'POLL_ERROR'
const SUBSCRIBE_POLL = 'SUBSCRIBE_POLL'
const UNSUBSCRIBE_POLL = 'UNSUBSCRIBE_POLL'

export const createPoll = poll => ({ type: CREATE_POLL, poll })
export const readPoll = poll => ({ type: READ_POLL, poll })
export const updatePoll = poll => ({ type: UPDATE_POLL, poll })
export const deletePoll = () => ({ type: DELETE_POLL })
export const requestPoll = () => ({ type: REQUEST_POLL })
export const requestCompleted = () => ({ type: REQUEST_COMPLETED })
export const pollError = error => ({ type: POLL_ERROR, error })
export const subscribePoll = () => ({ type: SUBSCRIBE_POLL })
export const unsubscribePoll = () => ({ type: UNSUBSCRIBE_POLL })

export const getPoll = pollId =>
  async (dispatch) => {
    dispatch(requestPoll())
    try {
      const pollSnap = await database.ref(`/polls/${pollId}`).once('value')
      const pollVal = pollSnap.val()
      dispatch(readPoll(pollVal))
    } catch (error) {
      dispatch(pollError(error))
    }
    dispatch(requestCompleted())
  }

export const destroyPoll = pollRef =>
  async (dispatch) => {
    dispatch(requestPoll())
    try {
      await pollRef.set(null)
      dispatch(deletePoll())
    } catch (error) {
      dispatch(pollError(error))
    }
    dispatch(requestCompleted())
  }

export const putPoll = (pollRef, updatedPoll) =>
  async (dispatch) => {
    try {
      await pollRef.set(updatedPoll)
      dispatch(updatePoll(updatedPoll))
    } catch (error) {
      dispatch(pollError(error))
    }
  }

export const generateAndPostPoll = () =>
  async (dispatch) => {
    dispatch(requestPoll())
    const createdPoll = await utilities.createPoll()
    if (createdPoll instanceof Error) {
      dispatch(pollError(createdPoll))
    } else {
      dispatch(readPoll(createdPoll))
    }
    dispatch(requestCompleted())
  }

export const subscribeToPoll = key =>
  async (dispatch) => {
    try {
      const dbRef = database.ref(`/polls/${key}`)
      dispatch(subscribePoll())
      dbRef.on('value', (snapshot) => {
        dispatch(updatePoll(snapshot.val()))
      })
      return dbRef
    } catch (error) {
      dispatch(pollError(error))
      return error
    }
  }

export const unsubscribeFromPoll = ref =>
  (dispatch) => {
    ref.off()
    dispatch(unsubscribePoll())
  }

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_POLL:
    case READ_POLL:
    case UPDATE_POLL:
      return Object.assign(state, action.poll)
    case DELETE_POLL:
      return defaultState
    case REQUEST_POLL:
      return Object.assign(state, { loading: true })
    case REQUEST_COMPLETED:
      return Object.assign(state, { loading: false })
    case POLL_ERROR:
      return Object.assign(state, { error: action.error })
    case SUBSCRIBE_POLL:
      return Object.assign(state, { subscribed: true })
    case UNSUBSCRIBE_POLL:
      return Object.assign(state, { subscribed: false })
    default:
      return state
  }
}

