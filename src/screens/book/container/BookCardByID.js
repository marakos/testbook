import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty'
import '../../book/book.css'
import { connect } from 'react-redux'
import _ from 'lodash';

const getBookByID = ( {item} ) => {
    
      
    // On success state retrun an object item 

      let {
        title,
        subtitle, 
        description, 
        author, 
        publisher,
        published, 
        pages,  
        
      } = item;
  
      let jsxStr = (
        <div className="book-card">
          <h1>{title} by {author}</h1>
          <h2>{subtitle}</h2>
          <h5>{description}</h5>
          <h3>{publisher}  {published}</h3>
          <h3>{pages}</h3>
        </div>
      )
      return (
        <div id="book" className="page">
          <div className="container">
            {jsxStr}
          </div>
        </div>
      )
    }
  

const mapStateToProps = (state, params ) => ({
  
  item:   _.find(state.books.data.books, ['isbn13' , params.params.ID]) 
   
});

export default connect(mapStateToProps)(getBookByID);
