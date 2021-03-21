import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form';
// Import Module reducers and combine them
import  books  from './screens/home/reducers'
import  createNewBook  from './screens/createBook/reducers'

const reducer= (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  createNewBook,
  books
});

export default reducer;