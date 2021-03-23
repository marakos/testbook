import React from 'react'
import { Field, reduxForm, reset } from 'redux-form';
import {MDBCol, MDBRow, MDBContainer} from 'mdbreact'
import './style.css'
import {submitedNewBookForm} from '../actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Validation Conditions
const required = value => value ? undefined : 'Required'

const maxLength = (max,type) => value =>
value && value.length > max ? `Must be ${max} ${type} or less` : undefined

const minLength = (min,type) => value =>
value && value.length < min ? `Must be ${min} ${type} or more` : undefined

const publisherCond = value =>
  value && !/[A-Z]$/i.test(value) ?
    'Only characters from Aa to Zz accepted' : undefined

const descriptionCond = value =>
  value && !/^[A-Z]/gm.test(value) ?
    'First letter must be uppercase' : undefined

const authorCond = value =>
  value && !/^([A-Z][-a-z]*(?:\s+[A-Z][a-z]*))?$/gm.test(value) ?
    'Firstname Lastname' : undefined

const titleCond = value =>
  value && !/^[A-Z@”#&*!\s]+$/gmi.test(value) ?
    'Only character from Aa-Zz and @”#&*! accepted' : undefined

    const categoryCond = value =>
  value && !/^[^,]+(?:,[^,]+){0,3}$/.test(value) ?
    'Max only 4 categories seperated by comma' : undefined

      const yearCond = value =>
      value && !/^[0-9]{4}$/gm.test(value) ?
        'Must be 4 digits' : undefined

      const pagesCond = value =>
      value && !/^[0-9]{0,4}$/gm.test(value) ?
        'Max 4 digits' : undefined

      const isbn13Cond = value =>
      value && !/^[0-9]{13}$/gm.test(value) ?
        'Must be 13 digits' : undefined

      const isbn10Cond = value =>
      value && !/^[0-9]{10}$/gm.test(value) ?
        'Must be 10 digits' : undefined
     
//Each field input 
    
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div >
      
     { !(label==="First Author Name" ||  label==="Second Author Name" || label==="Third Author Name") && <label className="control-label  text-left" >{label}</label>}
     { (label==="First Author Name" ) && <label className="control-label  text-left" > Authors</label>}
     
     { ( label==="Second Author Name"|| label==="Third Author Name") && <label className="control-label  text-left" > &nbsp;</label>}
     
        <input {...input} placeholder={label} type={type} style={{fontSize:'smaller'}} className="form-control text-center"></input> 
        {touched && ((error && <span className="text-danger position-absolute">{error}</span>) || (warning && <span>{warning}</span>))}
      
    </div>
  )



let CreateNewBookForm = props => {
  const { handleSubmit, pristine, submitting } = props;
 
  return (
    <form className="set-fonts" onSubmit={handleSubmit}>
      <MDBContainer  className="form-group w-100 " >

      <MDBRow> 
      <MDBCol>
      <div>
        <Field  name="title" component={renderField} label="Title" validate={ [required, titleCond, minLength(10,"characters"), maxLength(120,"characters")] } />
      </div>
      </MDBCol>

      <MDBCol>
      <div>
        <Field name="categories" component={renderField} label="Categories" validate={ [required,categoryCond] }/>
      </div>
      </MDBCol>
      </MDBRow>


      <MDBRow className="mt-5"> 
      <MDBCol  >
      <div >
        <Field name="firstAuthor" component={renderField} label="First Author Name" validate={ [required , authorCond] }/>
      </div>
      </MDBCol>
      
      <MDBCol >
      <div >
        <Field  name="secondAuthor" component={renderField} label="Second Author Name"validate={ [ authorCond]}/>
      </div>
      </MDBCol>

      <MDBCol >
      <div >
        <Field  name="thirdAuthor" component={renderField} label="Third Author Name"validate={ [ authorCond]}/>
      </div>
      </MDBCol>
      
      <MDBCol md="6">
      <div >
        <Field name="publisher" component={renderField} label="Publisher" validate={ [required, publisherCond, minLength(5,"characters"), maxLength(60,"characters")]  }/>
      </div>
      </MDBCol>
      </MDBRow > 


      <MDBRow className="mt-5"> 
      <MDBCol >
      <div >
        <Field name="description" component={renderField} label="Description" validate={ [required, descriptionCond, maxLength(512,"characters")] }/>
      </div>
      </MDBCol>
      </MDBRow>


      <MDBRow className="mt-5">
      <MDBCol >
      <div >
        <Field name="year"  component={renderField} label="Year" validate={ [required, yearCond ] }/>
      </div>
      </MDBCol>

      <MDBCol > 
      <div  >
        <Field  name="numberOfPages" component={renderField} label="Pages" validate={ [required, pagesCond ] }/>
      </div>
      </MDBCol>

      <MDBCol> 
      <div >
      <Field name="isbn" component={renderField} label="ISBN 10" validate={ [required, isbn10Cond] }/>
      </div>
      </MDBCol>

      <MDBCol > 
      <div >
      <Field name="isbn13" component={renderField} label="ISBN 13" validate={ [required, isbn13Cond ] }/>
      </div>
      </MDBCol>
      </MDBRow >

      <div className="text-center mt-5">
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </div>
      <ToastContainer autoClose={2000} />
      </MDBContainer>
    </form>
    
  )
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('createNewBook'));

 CreateNewBookForm =  reduxForm({
  form: 'createNewBook',
  onSubmit:submitedNewBookForm,
  onSubmitSuccess: afterSubmit,
})(CreateNewBookForm);

export default CreateNewBookForm




