const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

export const getUser = user => ({ type: GET_USER, user })
export const removeUser = () => ({ type: REMOVE_USER })
