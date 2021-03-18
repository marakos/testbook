import React, { useState, useEffect } from 'react';
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Form = () => {
    
    const [formData, setFormData] = useState({ title: '', description: '', categories: '', author: '', publisher: '', year:'', numberOfpages:'', isbn10:'', isbn13:'' });
    const [errorMsg, setErrorMsg] = useState({ title: '', description: '', categories: '', author: '', publisher: '', year:'', numberOfpages:'', isbn10:'', isbn13:'' });


    useEffect(() => {
        console.log(errorMsg)
    }, [errorMsg]);
    

    const submitHandler = event => {
    event.preventDefault();
  
    event.target.className += " was-validated";
  };

  const changeHandler = event => {
    validationHandler(event);
    setFormData({ [event.target.name]: event.target.value });
    
  };

  const validationHandler = event => {
      console.log(event.target.name==="title")
      console.log(event.target.value.length < 10)
      //Title Validation
    if(event.target.name==="title"){
        if(event.target.value.length<1){
        setErrorMsg({...errorMsg, title:"Cannot be empty"})

        }
    else if(event.target.value.length < 10 || event.target.value.length > 120){
        
        setErrorMsg({...errorMsg, title:"Title cannot be less than 10 characters and more than 120"})

    }
    }
  };

    return (
      <div>
        <form
          className="needs-validation"
          onSubmit={submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterTitle"
                className="grey-text"
              >
                Title
              </label>
              <input
                defaultValue={formData.title}
                name="title"
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterTitle"
                className="form-control"
                placeholder="Title"
                required
                noValidate
              />
              <div className="invalid-feedback"> {errorMsg.title}  </div>
            <div className="valid-feedback"></div>
             
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterDescription"
                className="grey-text"
              >
                Description
              </label>
              <input
                defaultValue={formData.description}
                name="description"
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterDescription"
                className="form-control"
                placeholder="Description"
                required
              />
              <div className="invalid-feedback">
                {errorMsg.description}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterCategories"
                className="grey-text"
              >
                Categories
              </label>
              <input
                defaultValue={formData.categories}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterCategories"
                className="form-control"
                name="categories"
                placeholder="Categories"
                required
              />
             <div className="invalid-feedback">
             {errorMsg.categories}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterAuthorNames"
                className="grey-text"
              >
                Author Names
              </label>
              <input
                defaultValue={formData.author}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterAuthorNames"
                className="form-control"
                name="authornames"
                placeholder="Author Names"
                required
              />
              <div className="invalid-feedback">
              {errorMsg.author}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPublisher"
                className="grey-text"
              >
                Publisher
              </label>
              <input
                defaultValue={formData.publisher}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterPublisher"
                className="form-control"
                name="publisher"
                placeholder="Publisher"
                required
              />
              <div className="invalid-feedback">
              {errorMsg.publisher}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterYear"
                className="grey-text"
              >
                Year
              </label>
              <input
                defaultValue={formData.year}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterYear"
                className="form-control"
                name="year"
                placeholder="Year"
                required
              />
              <div className="invalid-feedback">
              {errorMsg.year}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterNumberOfPages"
                className="grey-text"
              >
                Number of Pages
              </label>
              <input
                defaultValue={formData.numberOfpages}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterNumberOfPages"
                className="form-control"
                name="numberofpages"
                placeholder="Number of Pages"
                required
              />
              <div className="invalid-feedback">
              {errorMsg.numberOfpages}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterISBN10"
                className="grey-text"
              >
                ISBN-10
              </label>
              <input
                defaultValue={formData.isbn10}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterISBN10"
                className="form-control"
                name="isbn10"
                placeholder="ISBN-10"
                required
              />
              <div className="invalid-feedback">
              {errorMsg.isbn10}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
            <label
                htmlFor="defaultFormRegisterISBN13"
                className="grey-text"
              >
                ISBN-13
              </label>
              <input
                defaultValue={formData.isbn13}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterISBN13"
                className="form-control"
                name="isbn13"
                placeholder="ISBN-13"
                required
              />
              <div className="invalid-feedback">
              {errorMsg.isbn13}
              </div>
              <div className="valid-feedback"></div>
            </MDBCol>
          </MDBRow>
          <div className="text-center">
          <MDBBtn  color="primary" type="submit">
            Submit Form
          </MDBBtn>
          </div>
        </form>
      </div>
    );
  }
  export default Form;