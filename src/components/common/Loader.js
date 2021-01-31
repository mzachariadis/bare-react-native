/**
 * Animated loading component
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Loader: () => React$Node = ({
  show = true,
  fullScreen = false,
  animate = true,
  background,
}) => {
  if (!show) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        fullScreen && styles.fullScreen,
        background === 'dark' && styles.dark,
      ]}>
      {/* todo - add the loader of your preference (e.g. https://www.npmjs.com/package/react-native-indicators) */}
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  fullScreen: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  dark: {
    backgroundColor: '#013476',
  },
  text: {
    fontWeight: 'bold',
    color: 'gray',
  },
});
