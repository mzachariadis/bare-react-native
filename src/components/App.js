/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthActionsWrapper from './AuthActionsWrapper';
import AuthController from './AuthController';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <AuthActionsWrapper>
        <StatusBar barStyle="light-content" />
        <AuthController />
      </AuthActionsWrapper>
    </NavigationContainer>
  );
};

export default App;
