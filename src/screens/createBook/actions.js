import axios from 'axios'
import {CREATE_BOOK} from './actionTypes'
import { toast } from "react-toastify";

//  Create new Book action 
export const createNewBook = ({status, payload }) => ({
  type: CREATE_BOOK,
  status,
  payload
})


// Create new book action creator 
 export const submitedNewBookForm =  async (values,dispatch) => {
  
  //post new book entry back to server 
  const url = 'http://localhost:5000/books/create';

    try {
      await axios.post(url,values);
     
     dispatch(createNewBook({
       status: 'success',
       // payload: values, if we had to do something with those values
       
     }));

     toast.success("New book created successfully");

   } catch (error) {
     dispatch(createNewBook({
       status: 'error',
       payload: error
     }));
     toast.error("Something goes wrong");
   }

    };
    
