import React, { createContext, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const session = await Auth.currentSession();
      if (session) {
        setIsAuthenticated(true);
        const user = await Auth.currentAuthenticatedUser();
        setLoggedInUser(user);
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
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
