import { useState } from "react";
 import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: firstNameInputIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(value => value.trim() !== '');
  
  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: lastNameInputIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailInputIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if ( emailInputIsValid && firstNameInputIsValid && lastNameInputIsValid ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    if (!formIsValid) {
      return
    }

    resetEmailInput();
    resetFirstNameInput();
    resetLastNameInput();
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
  };

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';
  const firstNamelInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNamelInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
            />
            {firstNameInputHasError && <p className='error-text'>Please enter your first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            />
            {lastNameInputHasError && <p className='error-text'>Please enter your last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
