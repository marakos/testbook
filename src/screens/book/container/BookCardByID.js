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

  // On refresh state is getting cleared and we call api to get book/:id from backend 
  // api call only when state changes to undefined to minimize re renders 
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
        authors,
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
          <Card.Title><b>{title}</b> </Card.Title>
         
          <Card.Text > <b>Authors:</b> {authors}</Card.Text>
          <Card.Text ><b>Description:</b> {description}</Card.Text>
          <Card.Text ><b>Published by:</b> {publisher} <b>in</b> {year}</Card.Text>
          <Card.Text ><b>Number of Pages:</b> {numberOfPages}</Card.Text>
          <Card.Text ><b>ISBN 10:</b> {isbn}</Card.Text>
          <Card.Text ><b>ISBN 13:</b> {isbn13}</Card.Text>
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
  // item is the specific book by id
    let item =state.books.data.books!==undefined ? _.find(state.books.data.books, ['isbn13' , params.params.ID]) : params.params.ID
    return{
     item
  }
};

export default connect(mapStateToProps)(GetBookByID);
