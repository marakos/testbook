import { CREATE_BOOK } from './actionTypes'
import data from "../../api/data.json"
const initialState = {
  
  data: {},
  error: ''
}

 const createNewBook = (state = initialState, action) => {
 console.log(state)
  switch (action.type) {
    case CREATE_BOOK:
      return Object.assign({}, state, {
        //data:({...data, books: [...data.books,action.payload ]})
        data: action.status === 'success' ? ({...data,books: [...data.books,action.payload]}) :initialState.data,
        error: action.status === 'error' ? action.payload : initialState.error
       
  })
    default:
      return state;
  }
}
export default createNewBook;