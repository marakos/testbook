import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import { CREATE_BOOK } from './actionTypes';

// export const createNewBook=(values)=>{
//     return function (dispatch) {
//         console.log("Here "+ values)
//   var url = "/create"
  
//       var mock = new MockAdapter(axios)
//       mock.onPost("/create").reply(200)

   
// return axios.get(url)
// .then(response => {
//     if(response.data.success === true){
//   dispatch(createNewBook({
//     type: CREATE_BOOK,
//     status: 'success',
//     payload: values
//   }))
//   }
// })
// .catch(error => {
//   dispatch(createNewBook({
//     status: 'error',
//     payload: error
//   }))
// })
// };
// }


import {
  
  CREATE_BOOK
} from './actionTypes'


export const createNewBook = ({status, payload }) => ({
  type: CREATE_BOOK,
  status,
  payload
})

 export const submitedNewBookForm =  async (values,dispatch) => {
    
  const url = 'http://localhost:5000/books/create';
  
    try {
     const res = await axios.post(url,values);
     console.log(res)
     dispatch(createNewBook({
       status: 'success',
       payload: values
     }));
   } catch (error) {
     dispatch(createNewBook({
       status: 'error',
       payload: error
     }));
   }

    };
    
