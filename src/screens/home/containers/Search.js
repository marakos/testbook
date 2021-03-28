import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks, showComp } from '../actions'
import debounce from 'lodash/debounce'
import {  MDBBtn, MDBFormInline, MDBIcon, MDBRow , MDBCol, MDBContainer} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';



const Search = ({ getBooks, query,visibleComp, showComp }) => {

    
  //debounce: only invoke the callback after waiting for x ms from the last call.
  const debouncedGetBooks = debounce(query => {
    getBooks(query);
  }, 700);

 
  const onInputChange = e => {
        
       debouncedGetBooks(e.target)
  }
 
const handleToggleChange= e =>{
  e.preventDefault();
  showComp();
}


  return (
    
   <MDBCol md="12 pl-0 pr-0">
      <MDBFormInline className="mb-4 ">
      <MDBIcon icon="search" className=" text-center w-100 mb-2">  </MDBIcon>
        <input name="title" onChange={onInputChange} className="form-control  w-100 text-center" type="text" placeholder="Search book by tittle" aria-label="Search" />
        <MDBBtn onClick={handleToggleChange} size="sm" className="fontSize-smaller" social="fb">
        Advanced Search 
        <MDBIcon className="ml-1"icon="plus-circle"/>
        </MDBBtn>
        {
        visibleComp && (
          
         
    
       <MDBContainer className="bg-white">
        <MDBRow className="mb-1" sm="12">
  
       

          <MDBCol lg="6">
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">Authors:</span>
              </div>
              <input name="authors" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
          </MDBCol>
          <MDBCol>
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">Categories:</span>
              </div>
              <input name="categories" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-1" sm="12" >
          <MDBCol lg="6">
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">Publisher:</span>
              </div>
              <input name="publisher" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
       </MDBCol>
          <MDBCol>
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">Description:</span>
              </div>
              <input name="description" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-1" sm="12"> 
          <MDBCol lg="6">
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">ISBN 10:</span>
              </div>
              <input name="isbn" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
          </MDBCol>
          <MDBCol>
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">ISBN 13:</span>
              </div>
              <input name="isbn13" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
         </MDBCol>
        </MDBRow>

        <MDBRow className="mb-1" sm="12">
          <MDBCol >
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">Pages:</span>
              </div>
              <input name="pages" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
          </MDBCol>
          <MDBCol>
          <div  className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white">Year:</span>
              </div>
              <input name="year" onChange={onInputChange} type="text" className="form-control" aria-disabled="false" defaultValue=""/>
          </div>
        </MDBCol>
        </MDBRow>
        
       
        
       
       </MDBContainer>
        )
       }  

      </MDBFormInline>
    </MDBCol>
      
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.books.query,
    visibleComp: state.advSearch.visibleComp
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    showComp,
    getBooks
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);