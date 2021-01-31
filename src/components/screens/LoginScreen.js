import React, {useContext} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AuthContext from '../../context/AuthContext';

function LoginScreen() {
  const {handleLogin} = useContext(AuthContext);

  function handleClickLogin() {
    handleLogin({
      user: {
        username: 'mzachariadis',
      },
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text>Welcome unknown user</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Login" onPress={handleClickLogin} />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 2,
    alignItems: 'center',
  },
});
