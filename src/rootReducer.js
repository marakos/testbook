import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form';
// Import Module reducers and combine them
import  books  from './screens/home/reducers/booksResultReducer'
import  createNewBook  from './screens/createBook/reducers'
import advSearch from "./screens/home/reducers/advReducer"

const reducer= (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  createNewBook,
  books,
  advSearch
});

export default reducer;