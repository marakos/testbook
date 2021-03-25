import React from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'
import _ from 'lodash';
import BookCard from '../components/BookCard'

const renderBooksList = (data, query) => {


console.log(data)
  if ((_.values(query).every(_.isEmpty))||isEmpty(data)) {
    return null;
  }

  return (
    <>
      <h3>Results:</h3>
      <div className="books-list">
      
        {data.books.map(book => <BookCard key={book.isbn13} book={book} />)}
      </div>
    </>
  )
}

const Books = ({ data, isFetching, query, error }) => {
  console.log(query)
  let jsxStr = ''
   
  if (isFetching) {
    jsxStr = <p>Loading...</p>
  } else if (!isEmpty(error)) {
    jsxStr = JSON.stringify(error)
  } else if (isEmpty(error) && isEmpty(data.books) && !isEmpty(query))  {
    jsxStr = <h2> No Results Found</h2>
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

 const arr= data.books
  const result = arr.filter(o => 
    _.every(query, 
      (v, k) => new RegExp(v, 'i').test(o[k]
    )
  ))
  console.log(result)
  data.books=result
 
}
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