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
  const [isLoadingAuthContext, setIsLoadingAuthContext] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    setIsLoadingAuthContext(true);
    try {
      const session = await Auth.currentSession();
      if (session) {
        setIsAuthenticated(true);
        const currentUser = await Auth.currentAuthenticatedUser();
        setLoggedInUser(currentUser);
        const ampUser = await UserService.get();
        setAmplifyUser(ampUser[0]);
        setIsLoadingAuthContext(false);
      }
    } catch (e) {
      console.log('Amplify User', e);
      setIsLoadingAuthContext(false);
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
        isLoadingAuthContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
