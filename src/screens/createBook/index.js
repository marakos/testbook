import React from 'react';
import './createBook.css'
import Form from'./components/Form'

const CreateBook = () => {  
  
return(
  <div id="home" className="page">
    <div className="container">
      <h2 className="text-center mb-3">Create New Book</h2>
    <Form/>
    </div>
  </div>
)}

export default CreateBook;