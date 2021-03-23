import { CREATE_BOOK } from './actionTypes'



 const createNewBook = (state = {}, action) => {
  
  switch (action.type) {
    case CREATE_BOOK:
      return {}
    default:
      return state;
  }
}
export default createNewBook;