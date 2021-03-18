import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

// Import Module reducers and combine them
import { books } from './screens/home/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  // rest of your reducers
  books
});