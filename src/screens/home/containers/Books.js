import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'

import BookCard from '../components/BookCard'

const renderBooksList = (data, query) => {
  if (isEmpty(query)) {
    return null;
  }
  
  return (
    <>
      <h3>Search results for: {query}</h3>
      <div className="books-list">
      
        {data.books.map(book => <BookCard key={book.isbn13} book={book} />)}
      </div>
    </>
  )
}

const Books = ({ data, isFetching, query, error }) => {
  let jsxStr = ''
   
  if (isFetching) {
    jsxStr = <p>Loading...</p>
  } else if (!isEmpty(error) && !isEmpty(query)) {
    jsxStr = JSON.stringify(error)
  } else if ((!isEmpty(error) && isEmpty(query)) || (isEmpty(error) && isEmpty(query))) {
    
        jsxStr = renderBooksList(data, query);
      
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
  return {
    data,
    isFetching,
    query,
    error
  }
}

export default connect(
  mapStateToProps,
  null
)(Books);