import { REQUEST_BOOKS, RECEIVE_BOOKS } from './actionTypes'

const initialState = {
  query: '',
  isFetching: false,
  data: {},
  error: ''
}

 const books = (state = initialState, action) => {
  
  switch (action.type) {
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query
      })
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        
        isFetching: false,
        data: action.status === 'success' ? action.payload : initialState.data,
        error: action.status === 'error' ? action.payload : initialState.error
      })
    default:
      return state;
  }
}
export default books;