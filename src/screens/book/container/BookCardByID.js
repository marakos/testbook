import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty'
import '../../book/book.css'
import { connect } from 'react-redux'
import _ from 'lodash';
import axios from 'axios'


const GetBookByID = ({item})  => {
 
    const [bookInfo, setBookInfo] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {

    if(typeof item==='string'){
      setIsFetching(true)
      const url = 'http://localhost:5000/books';
      axios.get(`${url}/${item}`)
      .then(response => {
        setBookInfo(response.data);
      })
      .catch(() => {
        setBookInfo({});
      })
      .finally(() => {
        setIsFetching(false)
      })
    }else{
        setBookInfo(item)
    }
    }, [item]);
  
    let jsxStr = ''
    if (isFetching) {
      jsxStr = (
        <p>Loading...</p>
      )
    }
    
    if (!isEmpty(bookInfo)) {
      let {
        title,
        subtitle, 
        description, 
        author, 
        publisher,
        published, 
        pages,  
        
      } = bookInfo;
      

       jsxStr = (
        <div className="book-card">
          <h1>{title} by {author}</h1>
          <h2>{subtitle}</h2>
          <h5>{description}</h5>
          <h3>{publisher}  {published}</h3>
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
  

const mapStateToProps = (state, params ) => {
    let item =state.books.data.books!==undefined ? _.find(state.books.data.books, ['isbn13' , params.params.ID]) : params.params.ID
    return{
     item
  }
};

export default connect(mapStateToProps)(GetBookByID);
