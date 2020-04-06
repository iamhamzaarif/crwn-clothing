import React from 'react';

import './sign-in.styles.scss';

import CoustomButton from '../coustm-button/coustm-button.component'

import FormInput from '../form-input/form-input.component';

import {signInWithGoogle} from '../../firebase/firebase.utlis'

class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      this.setState({ email: '', password: '' });
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handleChange}
              label='password'
              required
            />
              <div className='buttons'>
                  
                <CoustomButton type='submit' >
                    SIGN IN
                </CoustomButton>
                <CoustomButton onClick={signInWithGoogle}  isGoogleSignIn>
                  {' '}  SIGN IN WITH GOOGLE {' '}
                </CoustomButton>
              </div>
               

            </form>
            </div>
        )
    }
}
export default SignIn;

{/*
class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handelSubmit = event => {
        event.preventDefault()
        this.setState({email:'', password:''})
    
    
    }
    handelChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value })
    }
    render(){
        return(
            <div className='sign-in'> 
            <h2>I ALREADY HAVE AN ACCOUNT</h2>
            <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>
            <form onSubmit={this.handelSubmit}>
                <FormInput name='email' 
                type='email' 
                handelChange={this.handelChange} 
                value={this.state.email}   
                label='Email' 
                 required />

                  <FormInput name='password'
                type='password' 
                value={this.state.password}
                handelChange={this.handelChange}
                label='Password' 
                required />
                
*/}
