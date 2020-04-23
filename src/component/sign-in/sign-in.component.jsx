import React, {useState} from 'react';

import {connect} from 'react-redux'

import './sign-in.styles.scss';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.action'

import CoustomButton from '../coustm-button/coustm-button.component'

import FormInput from '../form-input/form-input.component';

//import {auth, signInWithGoogle} from '../../firebase/firebase.utlis'

const SignIn =({emailSignInStart, googleSignInStart}) => {
   const [userCredential, setUserCredential] = useState({email: '',password: ''})  
  
   const{ email, password } = userCredential;
   const handleSubmit = async event => {
      event.preventDefault();
      

      emailSignInStart(email,password)

    };
  
   const handleChange = event => {
      const { value, name } = event.target;
  
      setUserCredential({...userCredential, [name]: value });
    };
  
      return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='password'
              required
            />
              <div className='buttons'>
                  
                <CoustomButton type='submit' >
                    SIGN IN
                </CoustomButton>
                <CoustomButton 
                type='button'
                onClick={googleSignInStart}  isGoogleSignIn>
                  {' '}  SIGN IN WITH GOOGLE {' '}
                </CoustomButton>
              </div>
               

            </form>
            </div>
        )
    }

export const mapDispatchToProps  = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
export default connect(null, mapDispatchToProps)(SignIn);

