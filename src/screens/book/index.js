import React from 'react';

import BookCardByID from './container/BookCardByID';


//params to pass url/ID to child component 
const Book = ({match:{params}}) => (
  
  <div id="book" className="page">
    <div className="container">
      <React.StrictMode>
      <BookCardByID params={params}/>
      </React.StrictMode>
    </div>
  </div>
)
export default Book;