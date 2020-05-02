import authReducer from './authReducer'
import adReducer from './adReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  ad: adReducer,
  firestore: firestoreReducer
});

export default rootReducer