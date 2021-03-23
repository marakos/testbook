import axios from 'axios'
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS
} from './actionTypes'




   

export const requestBooks = (query) => ({
  type: REQUEST_BOOKS,
  query
})

export const receiveBooks = ({status, payload }) => ({
  type: RECEIVE_BOOKS,
  status,
  payload
})

export const getBooks = (query) => {
    return async function (dispatch) {

      
        dispatch(requestBooks(query));
        const url = 'http://localhost:5000/books';
        axios.get(url)
        
      try {
        const response = await axios.get(url)
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