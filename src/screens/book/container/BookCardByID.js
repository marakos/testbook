import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty'
import '../../book/book.css'
import { connect } from 'react-redux'
import _ from 'lodash';
import axios from 'axios'
import Card from 'react-bootstrap/Card'



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
        description,
        firstAuthor, 
        secondAuthor,
        thirdAuthor,
        publisher,
        year, 
        numberOfPages,  
        isbn,
        isbn13
      } = bookInfo;
      
       jsxStr = (

<div>
         <Card className="w-50 m-auto"> 
        <Card.Body>
          <Card.Title>{title}</Card.Title>
         
          <Card.Text > Authors: {firstAuthor}{ secondAuthor?', ':''} {secondAuthor} { thirdAuthor?',':''} {thirdAuthor}</Card.Text>
          <Card.Text >Description: {description}</Card.Text>
          <Card.Text >Published by: {publisher} in {year}</Card.Text>
          <Card.Text >Number of Pages: {numberOfPages}</Card.Text>
          <Card.Text >ISBN 10: {isbn}</Card.Text>
          <Card.Text >ISBN 13: {isbn13}</Card.Text>
        </Card.Body>
      </Card>
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
