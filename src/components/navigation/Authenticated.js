/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NAVIGATOR_STYLE } from '../../constants/theme';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../screens/HomeScreen";

const Stack = createStackNavigator();

function MainStackScreen() {
  return (
    <Stack.Navigator screenOptions={NAVIGATOR_STYLE}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

const Authenticated: () => React$Node = () => {
  return <MainStackScreen />;
};

export default Authenticated;
