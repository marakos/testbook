import React, { useState, useEffect } from 'react';
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import './book.css'
import data from '../../api/data.json'

const createMarkup = (markup) => ({__html: markup});

const Book = ({ match: { params } }) => {
  
  const [bookInfo, setBookInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    
    var filterData = data.books.filter(item => item.isbn.includes(params.ID));
    setBookInfo(filterData)
  }, [params.ID]);

  let jsxStr = ''
  if (isFetching) {
    jsxStr = (
      <p>Loading...</p>
    )
  }

  if (!isEmpty(bookInfo)) {
    console.log(bookInfo)
    let {
      title,
      subtitle, 
      description, 
      author, 
      publisher,
      published, 
      pages,  
      
    } = bookInfo[0];
    published = published.split("T");
    console.log(typeof published)
    jsxStr = (
      <div className="book-card">
        <h1>{title} by {author}</h1>
        <h2>{subtitle}</h2>
        <h5>{description}</h5>
        <h3>{publisher}  { published[0]}</h3>
        
        <h3>{pages}</h3>
       
       
      </div>
    )
  }

  return (
    <div id="book" className="page">
      <div className="container">
        {jsxStr}
      </div>
    </div>
  )
}
export default Book;