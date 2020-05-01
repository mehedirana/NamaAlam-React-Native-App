import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from './components/MyHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <MyHeader/>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
