import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen'; // Pastikan path file benar

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <ProfileScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
