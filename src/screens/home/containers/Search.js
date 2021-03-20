import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../actions'
import debounce from 'lodash/debounce'
import {  MDBCol, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';



const Search = ({ getBooks, query }) => {


  //debounce: only invoke the callback after waiting for x ms from the last call.
  const debouncedGetBooks = debounce(query => {
    getBooks(query);
  }, 700);

 
  const onInputChange = e => {
        console.log(e.target.value)
       debouncedGetBooks(e.target.value)
  }

  return (
    <div className="search-books">
     <MDBIcon icon="search" className="text-center mb-4">  </MDBIcon>
      <MDBCol  >
      
      <form className="form-inline md-4">
      
        <input onChange={onInputChange} className="form-control  ml-1 w-100" type="text" placeholder="Search your favorite book." aria-label="Search" />
      </form>
    </MDBCol>
 
    </div>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.books.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBooks
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);