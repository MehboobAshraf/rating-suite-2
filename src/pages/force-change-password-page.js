import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';

import SignInPageContainerComponent from '../components/home-page-components/sign-in-page-container.component';
import ForcePasswordChangeFormComponent from '../components/home-page-components/force-password-change-form.component';

import SignInService from '../services/sign-in.service';

import { AuthContext } from '../context/AuthContext';

const ForceChangePasswordPage = withRouter(({ history }) => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChangePassword = async (data) => {
    setLoading(true);
    try {
      const response = await SignInService.forcePasswordChange({
        loggedInUser,
        ...data,
      });
      setErrorMessage('');
      setLoggedInUser(response);
      history.push('/dashboard');
    } catch (e) {
      setErrorMessage(e.message);
    }
    setLoading(false);
  };

  return (
    <SignInPageContainerComponent>
      <ForcePasswordChangeFormComponent
        onChangePassword={onChangePassword}
        isLoading={isLoading}
        errorMessage={errorMessage}
      ></ForcePasswordChangeFormComponent>
    </SignInPageContainerComponent>
  );
});

export default ForceChangePasswordPage;
