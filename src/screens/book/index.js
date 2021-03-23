import React from 'react';

import BookCardByID from './container/BookCardByID';



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