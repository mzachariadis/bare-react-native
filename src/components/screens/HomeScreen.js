import React, {useContext} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AuthContext from '../../context/AuthContext';

function HomeScreen() {
  const {user, handleLogout} = useContext(AuthContext);

  function handleClickLogout() {
    handleLogout();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text>Welcome {user.username}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Logout" onPress={handleClickLogout} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

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
