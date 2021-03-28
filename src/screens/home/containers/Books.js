import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'
import _ from 'lodash';
import BookCard from '../components/BookCard'
import {MDBContainer} from "mdbreact";

const renderBooksList = (data, query) => {

//display books cards after search only if there are any params 

  if ((_.values(query).every(_.isEmpty))||isEmpty(data)) {
    return null;
  }

  return (
    <>
      <h3> {data.books.length} Results</h3>
                <div className="books-list">
        
        
        <MDBContainer className="book-card-container">
             {data.books.map(book => 
             <BookCard key={book.isbn13} book={book} />)}
        </MDBContainer>
      </div>
    </>
  )
}

const Books = ({ data, isFetching, query, error }) => {
  let jsxStr = ''
   
  if (isFetching) {
    jsxStr = <p>Loading...</p>
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error)
  } else if (isEmpty(error) && isEmpty(data.books) && !isEmpty(query))  {
    jsxStr = <h3> No Results Found</h3>
  } else {
    jsxStr = renderBooksList(data, query);
  }
  return (
    <div className="books">
      {jsxStr}
    </div>
  )
}

const mapStateToProps = (state) => {
  let { data, isFetching, query, error } = state.books
if(data.books!==undefined){


  // Filter state with books with params from search
 const arr= data.books
  const result = arr.filter(o => 
    _.every(query, 
      (v, k) => new RegExp(v, 'i').test(o[k]
    )
  ))
  data.books=result
 
}
  return {
    data,
    isFetching,
    query,
    error
  }
}

export default React.memo(connect(
  mapStateToProps,
   null
)(Books));