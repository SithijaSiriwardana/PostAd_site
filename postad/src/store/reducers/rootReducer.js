import authReducer from './authReducer'
import adReducer from './adReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  ad: adReducer
});

export default rootReducer