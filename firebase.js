import * as firebase from 'firebase'

import config from './secrets'

firebase.initializeApp(config)
export default firebase
export const database = firebase.database()
