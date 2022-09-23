import {useRef, useContext} from 'react'
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import {API_KEY} from '../../components/Auth/AuthForm'
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  
  const {token} = authCtx;
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    const enteredNewPassword = newPasswordInputRef.current.value;
    // optional: Add validation
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}` 
    // send password to firebase
    fetch(url,{
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      // assumption: Always succeeds! 
      history.replace('/');
    }).catch(err => {
      alert(err);
    })
  }
  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="6" ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
