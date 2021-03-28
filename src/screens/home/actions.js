import axios from 'axios'
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  SHOW,
} from './actionTypes'


// Get Book  actions 
export const requestBooks = (query) => ({
  type: REQUEST_BOOKS,
  query
})

export const receiveBooks = ({status, payload }) => ({
  type: RECEIVE_BOOKS,
  status,
  payload
})

// Get book action creator  

export const getBooks = (query) => {
    return async function (dispatch) {

        
        dispatch(requestBooks(query));
        const url = 'http://localhost:5000/books';
        const response = await axios.get(url)
        
      try {
        
        dispatch(receiveBooks({
          status: 'success',
          payload: response.data
        }))
      } catch (error) {
        dispatch(receiveBooks({
          status: 'error',
          payload: error
        }))
      }
};
}

// Advanced Search action
export const toggleVisibility=()=>({
  type: SHOW,
  
})
// Advanced Search action creator
export const showComp = () =>{
 
  return function(dispatch){
    dispatch(toggleVisibility())
}
}
