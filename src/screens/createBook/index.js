import React from 'react';
import './createBook.css'
import Form from'./components/Form'

const CreateBook = () => {  
  
   const submit=(values) =>{
  alert("submitted");
  console.log(values);
}
  
return(
  <div id="home" className="page">
    <div className="container">
    <Form onSubmit={submit} />
    </div>
  </div>
)}

export default CreateBook;