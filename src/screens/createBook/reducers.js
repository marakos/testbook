import { CREATE_BOOK } from './actionTypes'

const initialState = {
  
  data: {},
  error: '',
}

 const createNewBook = (state = initialState, action) => {
  
  switch (action.type) {
    case CREATE_BOOK:
      return Object.assign({}, state, {
        // ({...data,books: [...data.books,action.payload]})
        data: action.status === 'success' ?  action.payload:initialState.data,
        
        error: action.status === 'error' ? action.payload : initialState.error

  })
    default:
      return state;
  }
}
export default createNewBook;