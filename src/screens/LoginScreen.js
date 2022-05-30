import React from 'react';
import './LoginScreen.css';
import { useState } from 'react';
import SignInScreen  from './SignInScreen';

function Login() {
  const [signIn , setSignIn] = useState(false);
  return <div className='loginScreen'>
    <div className='loginScreen__Background'>
      
      <img className='loginScreen__Logo' src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png' alt='Netflix Logo'/>

    </div>

    <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>
    <div className='loginScreen__gradient'></div>

    {/* login screen div */}
    <div className='loginScreen__body'>
      {signIn ? (
        <SignInScreen />
      ) : (
        <>
      <h1>Unlimited films, TV programmes and more.</h1>
      <h2>Watch anywhere , Cancel at any time</h2>
      <h3>Ready to watch? Enter you email to create or restart your membership</h3>
      {/* div with login screen input */}
      <div className='loginScreen__input'>
        {/* a form with an input which takees in an email address */}
        <form action="">
          <input type="email" placeholder='Email Address'/>
          <button onClick={() => setSignIn(true)}className='loginScreen__getStarted'>GET STARTED</button>
        </form>
        </div>
      </>
      )}
      
    </div>

  </div>;
}

export default Login;
