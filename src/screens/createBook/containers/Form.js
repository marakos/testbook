import React from 'react'
import { Field, reduxForm, reset } from 'redux-form';
import {MDBCol, MDBRow, MDBContainer} from 'mdbreact'
import {submitedNewBookForm} from '../actions';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Validation Conditions
const required = value => value ? undefined : 'Required'

const maxLength = (max,type) => value =>
value && value.length > max ? `Max ${max} ${type}` : undefined

const minLength = (min,type) => value =>
value && value.length < min ? `Minimum ${min} ${type}` : undefined

const publisherCond = value =>
  value && !/[A-Z]$/i.test(value) ?
    'Only characters from Aa to Zz accepted' : undefined

const descriptionCond = value =>
  value && !/^[A-Z]/gm.test(value) ?
    'First letter must be uppercase' : undefined

const authorCond = value =>
  value && !/^([A-Z][-a-z]*(?:\s+[A-Z][a-z]*))?$/gm.test(value) ?
    'Accepted names must be Firstname Lastname ' : undefined

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
    
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="mb-1">
    <div className="input-group input-group-sm mb-2" >
      <div className="input-group-prepend " >
             { !(label==="First Author Name" ||  label==="Second Author Name" || label==="Third Author Name") && <span   className="input-group-text bg-white">{label}</span>}
             { (label==="First Author Name" ) && <span   className="input-group-text bg-white"> Authors</span>}
     
            { ( label==="Second Author Name"|| label==="Third Author Name") && <label className="control-label  text-left" > &nbsp;</label>}
     
            </div>
         
            <input {...input}  placeholder={label} type={type}  className="form-control text-center mr-1"></input> 
             

             </div>
             {touched && ((error &&  <span className="text-danger text-center mb-1 m-auto">{error}</span>)) }
             </div>
  )



let CreateNewBookForm = props => {
  const { handleSubmit, pristine, submitting } = props;
 
  return (

  
    <form onSubmit={handleSubmit}> 

      <MDBContainer  > 
      <MDBRow className="mb-3" sm="12">  
      <MDBCol lg="4">
        <Field  name="title" component={renderField} label="Title" validate={ [required, titleCond, minLength(10,"characters"), maxLength(120,"characters")] } />
      </MDBCol>
      <MDBCol lg="4">
        <Field name="categories" component={renderField} label="Categories" validate={ [required,categoryCond] }/>
      </MDBCol>
      <MDBCol lg="4">
      <div >
        <Field name="publisher" component={renderField} label="Publisher" validate={ [required, publisherCond, minLength(5,"characters"), maxLength(60,"characters")]  }/>
      </div>
      </MDBCol>
      </MDBRow>


      <MDBRow > 
      <MDBCol  lg='4'>
      <div >
        <Field name="firstAuthor" component={renderField} label="First Author Name" validate={ [required , authorCond] }/>
      </div>
      </MDBCol>
      
      <MDBCol lg='4'>
      <div >
        <Field  name="secondAuthor" component={renderField} label="Second Author Name"validate={ [ authorCond]}/>
      </div>
      </MDBCol>

      <MDBCol lg='4'>
      <div >
        <Field  name="thirdAuthor" component={renderField} label="Third Author Name"validate={ [ authorCond]}/>
      </div>
      </MDBCol>
      
      </MDBRow > 


      <MDBRow className="mt-2"> 
      <MDBCol >
      <div >
        <Field name="description" component={renderField} label="Description" validate={ [required, descriptionCond, maxLength(512,"characters")] }/>
      </div>
      </MDBCol>
      </MDBRow>


      <MDBRow className="mt-2">
      <MDBCol lg="3">
      <div >
        <Field name="year"  component={renderField} label="Year" validate={ [required, yearCond ] }/>
      </div>
      </MDBCol>

      <MDBCol lg="3"> 
      <div  >
        <Field  name="numberOfPages" component={renderField} label="Pages" validate={ [required, pagesCond ] }/>
      </div>
      </MDBCol>

      <MDBCol lg="3"> 
      <div >
      <Field name="isbn" component={renderField} label="ISBN 10" validate={ [required, isbn10Cond] }/>
      </div>
      </MDBCol>

      <MDBCol lg="3"> 
      <div >
      <Field name="isbn13" component={renderField} label="ISBN 13" validate={ [required, isbn13Cond ] }/>
      </div>
      </MDBCol>
      </MDBRow >

      <div className="text-center mt-2">
        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </div>
      <ToastContainer autoClose={2000} />
      </MDBContainer>
    </form>
 
    
  )
}
// Clear form after submit 
const afterSubmit = (result, dispatch) =>
  dispatch(reset('createNewBook'));

 CreateNewBookForm =  React.memo( reduxForm({
  form: 'createNewBook',
  onSubmit:submitedNewBookForm,
  onSubmitSuccess: afterSubmit,
})(CreateNewBookForm));

export default CreateNewBookForm




