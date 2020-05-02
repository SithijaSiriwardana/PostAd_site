import authReducer from './authReducer'
import adReducer from './adReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  ad: adReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer