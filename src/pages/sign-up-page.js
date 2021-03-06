import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import SignUpPageContainerComponent from '../components/home-page-components/sign-up-page-container.component';
import SignUpFormComponent from '../components/home-page-components/sign-up-form.component';

import SignUpService from '../services/sign-up.service';

const SignUpPage = withRouter(({ history }) => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() =>{
    window.scrollTo(0, 0);
  },[]);

  const onSubmit = async (user) => {
    setLoading(true);
    try {
      await SignUpService.signup(user);
      history.push('/signin?signedUpSuccess=true');
      setLoading(false);
    } catch (e) {
      console.log('Error message', e);
      setErrorMessage(e.message);
      setLoading(false);
    }
  };

  return (
    <SignUpPageContainerComponent>
      <SignUpFormComponent
        onSubmit={onSubmit}
        isLoading={isLoading}
        errorMessage={errorMessage}
      ></SignUpFormComponent>
    </SignUpPageContainerComponent>
  );
});

export default SignUpPage;
