import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './context/AuthContext';

import Amplify from 'aws-amplify';
import config from './config.json';

import './styles/globals.css';
import './styles/bootstrap.min.css';
import './styles/themify-icons.css';
import './styles/default.css';
import 'antd/dist/antd.min.css';
import './styles/style.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
    region: config.cognito.REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: config.cognito.USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  API: {
    endpoints: [
      {
        name: 'UserApi',
        endpoint: 'https://fm1l6yqvdg.execute-api.us-east-1.amazonaws.com/dev',
      },
    ],
  },
});

ReactDOM.render(
  <React.Fragment>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
