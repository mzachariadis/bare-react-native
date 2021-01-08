import React, { useEffect, useState } from 'react';
import { AuthProvider } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './common/Loader';
import auth from '../api/rest/user';

/**
 * Set Context <AuthProvider/> value
 */
function AuthActionsWrapper({ children }) {
  const [state, setState] = useState({
    isAuthenticated: false,
    getAuthenticatedUserCompleted: false,

    user: {},
    token: null,
  });

  useEffect(() => {
    (async function () {
      try {
        let isAuthenticated = false;
        let sessionData = await AsyncStorage.getItem('@session-data');
        if (sessionData) {
          sessionData = JSON.parse(sessionData);
          await auth.getUser(sessionData.token);
          isAuthenticated = true;
        } else {
          sessionData = {
            user: {},
            token: null,
          };
        }
        setState({
          isAuthenticated: isAuthenticated,
          getAuthenticatedUserCompleted: true,
          ...sessionData,
        });
      } catch (exception) {
        console.log('exception', exception);
        resetState();
        const hasConnectivityProblem =
          exception.message === 'timeout' ||
          exception.message === 'Network request failed';

        if (hasConnectivityProblem) {
          toast.error('Πρόβλημα συνδεσιμότητας');
        }
      }
    })();
  }, []);

  async function handleLogin(userData) {
    try {
      const sessionData = userData;

      await AsyncStorage.setItem(
        '@session-data',
        JSON.stringify(sessionData),
      );

      setState({
        isAuthenticated: true,
        getAuthenticatedUserCompleted: true,

        ...sessionData,
      });
    } catch (exception) {
      console.log(exception);
      resetState();
    }
  }

  async function handleLogout() {
    resetState();
  }

  function resetState(completed = true) {
    (async function () {
      try {
        await AsyncStorage.removeItem('@session-data');
        setState({
          isAuthenticated: false,
          getAuthenticatedUserCompleted: completed,

          user: {},
          token: null,
        });
      } catch (exception) {
        console.log(exception);
      }
    })();
  }

  // RENDER
  const authProviderValue = {
    ...state,
    handleLogin: handleLogin,
    handleLogout: handleLogout,
  };

  return (
    <AuthProvider value={authProviderValue}>
      {state.getAuthenticatedUserCompleted ? children : <Loader />}
    </AuthProvider>
  );
}

export default AuthActionsWrapper;
