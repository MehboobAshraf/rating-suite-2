import React, { createContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

import UserService from '../services/user.service';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  // This is the user which is get from auth session
  const [loggedInUser, setLoggedInUser] = useState(null);
  // This is the user object which is get by API request
  const [amplifyUser, setAmplifyUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  });

  const checkAuthStatus = async () => {
    try {
      const session = await Auth.currentSession();
      if (session) {
        setIsAuthenticated(true);
        const currentUser = await Auth.currentAuthenticatedUser();
        setLoggedInUser(currentUser);
        const ampUser = await UserService.get();
        setAmplifyUser(ampUser[0]);
        console.log('Logged In User', loggedInUser);
        console.log('Amplify User', amplifyUser);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        amplifyUser,
        setAmplifyUser,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
