import {createContext} from 'react';

const AuthContext = createContext({
  isAuthenticated: false,

  user: {},
  token: null,

  handleLogin: (sessionData) => {},
  handleLogout: () => {},
});

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
export default AuthContext;
