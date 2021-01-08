/**
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import AuthContext from '../context/AuthContext';
import Authenticated from './navigation/Authenticated';
import Anonymous from './navigation/Anonymous';

const AuthController: () => React$Node = () => {
  const {isAuthenticated} = useContext(AuthContext);
  return <>{isAuthenticated ? <Authenticated /> : <Anonymous />}</>;
};

export default AuthController;
