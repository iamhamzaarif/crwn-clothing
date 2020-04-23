import React ,{useState}from 'react'

import FormInput from '../form-input/form-input.component'
import {connect} from 'react-redux'
import CoustmButton from '../coustm-button/coustm-button.component'

import {signUpStart} from '../../redux/user/user.action'
//import {auth, createUserProfileDocument } from '../../firebase/firebase.utlis'
import './sign-up.styles.scss'

const SignUp = ({signUpStart}) => {
  
    const [userCrendential, setUsercredential] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })    

      
    const{ displayName, email, password, confirmPassword } = userCrendential
    const handleSubmit = async event => {
      event.preventDefault();

      
  
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
  
      signUpStart({displayName, email, password})
  
    }
  
   const handleChange = event => {
      const { name, value } = event.target;
  
      setUsercredential({...userCrendential, [name]: value });
      
    };
  

      return (
        <div className='sign-up'>
          <h2 className='title'>I do not have a account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={handleChange}
              label='Display Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              label='Email'
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              label='Password'
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              label='Confirm Password'
              required
            />
            <CoustmButton type='submit'>SIGN UP</CoustmButton>
          </form>
        </div>
      );
    }
  
  
const mapDispatchToProps = dispatch =>({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential))
})

  export default connect(null, mapDispatchToProps)(SignUp);